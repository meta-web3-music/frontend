import { Wallet, ethers } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { polygonMumbai } from "viem/chains";
import { Framework } from "@superfluid-finance/sdk-core";
import { usdcxWalletBalanceSub } from "@/subs/WalletBalanceSub";
import { GET_MY_STREAMS } from "@/graph-ql/queries/superfluid/GET_MY_STREAMS/getMyStreams";
import { useQuery } from "@apollo/client";
import { useWalletClient } from "wagmi";

type AppWalletContextType = {
  wallet: Wallet | undefined;
  provider: ethers.providers.Provider;
  superfluid: Framework | undefined;
};
export let AppWalletContext: React.Context<AppWalletContextType>;

const LOCAL_PRIVATE_KEY = "PRIVATE_KEY";
export function AppWallet(props: React.PropsWithChildren) {
  const { data: myStreams, refetch: refetchStreams } = useQuery(GET_MY_STREAMS);

  const provider = useMemo(
    () =>
      //TODO env
      new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL),
    []
  );

  useEffect(() => {
    // TODO: encrypt?

    const privKey = localStorage.getItem(LOCAL_PRIVATE_KEY);
    if (privKey) {
      setWallet(new Wallet(privKey).connect(provider));
    } else {
      const w = Wallet.createRandom();
      // TODO: encrypt?
      localStorage.setItem(LOCAL_PRIVATE_KEY, w.privateKey);
      setWallet(w.connect(provider));
    }
  }, []);

  const [superfluid, setSuperfluid] = useState<Framework>();
  const initSuperfluid = async () => {
    const sf = await Framework.create({
      chainId: polygonMumbai.id, //i.e. 137 for matic
      provider: provider, // i.e. the provider being used
    });

    setSuperfluid(sf);
  };

  const { data: browserW } = useWalletClient();
  useEffect(() => {
    initSuperfluid();
  }, []);

  const update_balance = async () => {
    if (superfluid && wallet) {
      const usdcx = await superfluid.loadSuperToken("fUSDCx");
      const b = await usdcx.balanceOf({
        account: wallet.address,
        providerOrSigner: provider,
      });
      let browserWBal = "";
      if (browserW)
        browserWBal = await usdcx.balanceOf({
          account: browserW.account.address,
          providerOrSigner: provider,
        });

      usdcxWalletBalanceSub.next([
        (+b / 10 ** 18).toString(),
        (+browserWBal / 10 ** 18).toString(),
      ]);
      setInterval(async () => {
        try {
          const b = await usdcx.balanceOf({
            account: wallet.address,
            providerOrSigner: provider,
          });
          let _browserWBal = "";

          if (browserW)
            _browserWBal = await usdcx.balanceOf({
              account: browserW.account.address,
              providerOrSigner: provider,
            });
          usdcxWalletBalanceSub.next([
            (+b / 10 ** 18).toString(),
            (+_browserWBal / 10 ** 18).toString(),
          ]);
        } catch (error) {
          console.log("failed to update balance");
          console.log(error);
        }
      }, 2000);
    }
  };
  useEffect(() => {
    update_balance();
  }, [superfluid]);
  const [wallet, setWallet] = useState<Wallet>();
  useEffect(() => {
    if (wallet) {
      refetchStreams({ owner: wallet.address.toLowerCase() });
    }
  }, [wallet]);

  const handleStreamReceived = async () => {
    const outflows = myStreams?.account?.outflows;

    if (wallet && outflows && superfluid && outflows.length > 0) {
      const usdcx = await superfluid.loadSuperToken("fUSDCx");
      for (const s of outflows) {
        console.log("delete flow");

        const op = await usdcx.deleteFlow({
          receiver: s.receiver.id,
          sender: wallet?.address,
        });
        await op.exec(wallet);
      }
    }
  };
  useEffect(() => {
    handleStreamReceived();
  }, [myStreams, wallet, superfluid]);
  const value: AppWalletContextType = useMemo(
    () => ({
      wallet,
      provider,
      superfluid,
    }),
    [wallet, superfluid]
  );

  AppWalletContext = React.createContext(value);

  return (
    <AppWalletContext.Provider value={value}>
      {props.children}
    </AppWalletContext.Provider>
  );
}
