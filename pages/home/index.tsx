import Head from "next/head";
import HottestSongs from "../../src/components/Home/HottestSongs";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full flex flex-col overflow-scroll">
        <HottestSongs />
      </div>
    </>
  );
};

export default Home;
