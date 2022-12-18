import { Typography } from "antd";
import { AdList } from "../../src/components/AdMarketPlace/AdList";
import Head from "next/head";
// create client instance for nft.storage
export const AdMarketPlace: React.FC = () => {
  const { Title } = Typography;

  return (
    <>
      <Head>
        <title>Market</title>
      </Head>
      <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left dark:text-white">
        <Title level={2}>Ad Marketplace</Title>
        <AdList />
      </div>
    </>
  );
};

export default AdMarketPlace;
