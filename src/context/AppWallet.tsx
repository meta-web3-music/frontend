import { Wallet, ethers } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { polygonMumbai } from "viem/chains";
import { Framework } from "@superfluid-finance/sdk-core";
import { usdcxWalletBalanceSub } from "@/subs/WalletBalanceSub";

type AppWalletContextType = {
  wallet: Wallet | undefined;
  provider: ethers.providers.Provider;
  superfluid: Framework | undefined;
};
export let AppWalletContext: React.Context<AppWalletContextType>;

const LOCAL_PRIVATE_KEY = "PRIVATE_KEY";
export function AppWallet(props: React.PropsWithChildren) {
  const provider = useMemo(
    () =>
    //TODO env
      new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/K1HwBuFnED1TYOeBycNToXc-TnfjGs6l"
      ),
    []
  );

  useEffect(() => {
    // TODO: encrypt?

    const privKey = localStorage.getItem(LOCAL_PRIVATE_KEY);
    if (privKey) {
      setWallet(new Wallet(privKey));
    } else {
      const w = Wallet.createRandom();
      // TODO: encrypt?
      localStorage.setItem(LOCAL_PRIVATE_KEY, w.privateKey);
      setWallet(w);
    }
  }, []);

  const [superfluid, setSuperfluid] = useState<Framework>();

  useEffect(() => {
    Framework.create({
      chainId: polygonMumbai.id, //i.e. 137 for matic
      provider: provider, // i.e. the provider being used
    }).then(setSuperfluid);
  }, []);

  const update_balance = async () => {
    if (superfluid && wallet) {
      const usdcx = await superfluid.loadSuperToken("fUSDCx");
      const b = await usdcx.balanceOf({
        account: wallet.address,
        providerOrSigner: provider,
      });

      usdcxWalletBalanceSub.next((+b / 10 ** 18).toString());
      setInterval(async () => {
        const b = await usdcx.balanceOf({
          account: wallet.address,
          providerOrSigner: provider,
        });

        usdcxWalletBalanceSub.next((+b / 10 ** 18).toString());
      }, 2000);
    }
  };
  useEffect(() => {
    update_balance();
  }, [superfluid]);
  const [wallet, setWallet] = useState<Wallet>();

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
