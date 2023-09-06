import { Wallet, ethers } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { polygonMumbai } from "viem/chains";
import { Framework } from "@superfluid-finance/sdk-core";
import { GET_MY_STREAMS } from "@/graph-ql/queries/superfluid/GET_MY_STREAMS/getMyStreams";
import { useQuery } from "@apollo/client";

type AppWalletContextType = {
  wallet: Wallet | undefined;
  provider: ethers.providers.Provider;
  superfluid: Framework | undefined;
};
export let AppWalletContext: React.Context<AppWalletContextType>;

const LOCAL_PRIVATE_KEY = "PRIVATE_KEY";
export function AppWallet(props: React.PropsWithChildren) {
  const { data: myStreams, refetch: refetchStreams } = useQuery(GET_MY_STREAMS);
  const [inbuiltWallet, setInbuildWallet] = useState<Wallet>();

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
      setInbuildWallet(new Wallet(privKey).connect(provider));
    } else {
      const w = Wallet.createRandom();
      // TODO: encrypt?
      localStorage.setItem(LOCAL_PRIVATE_KEY, w.privateKey);
      setInbuildWallet(w.connect(provider));
    }
  }, [provider]);

  const [superfluid, setSuperfluid] = useState<Framework>();
  const initSuperfluid = async () => {
    const sf = await Framework.create({
      chainId: polygonMumbai.id, //i.e. 137 for matic
      provider: provider, // i.e. the provider being used
    });

    setSuperfluid(sf);
  };

  useEffect(() => {
    initSuperfluid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inbuiltWallet) {
      refetchStreams({ owner: inbuiltWallet.address.toLowerCase() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inbuiltWallet]);

  const handleStreamReceived = async () => {
    const outflows = myStreams?.account?.outflows;

    if (inbuiltWallet && outflows && superfluid && outflows.length > 0) {
      const fusdcx = await superfluid.loadSuperToken("fUSDCx");
      for (const s of outflows) {
        console.log("delete flow");

        const op = await fusdcx.deleteFlow({
          receiver: s.receiver.id,
          sender: inbuiltWallet?.address,
        });
        await op.exec(inbuiltWallet);
      }
    }
  };
  useEffect(() => {
    handleStreamReceived();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myStreams, inbuiltWallet, superfluid]);
  const value: AppWalletContextType = useMemo(
    () => ({
      wallet: inbuiltWallet,
      provider,
      superfluid,
    }),
    [inbuiltWallet, superfluid, provider]
  );

  AppWalletContext = React.createContext(value);

  return (
    <AppWalletContext.Provider value={value}>
      {props.children}
    </AppWalletContext.Provider>
  );
}
