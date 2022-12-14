import { AdList } from "../../src/components/AdMarketPlace/AdList";
import Head from "next/head";
// create client instance for nft.storage
export const AdMarketPlace: React.FC = () => {
  return (
    <>
      <Head>
        <title>Market</title>
      </Head>
      <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left pt-14">
        <p className="text-4xl font-bold mb-10">Adspace Marketplace</p>
        <AdList />
      </div>
    </>
  );
};

export default AdMarketPlace;
