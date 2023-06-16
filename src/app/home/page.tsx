import HottestSongs from "@/components/Home/HottestSongs";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full flex flex-col">
        <HottestSongs />
      </div>
    </>
  );
};

export default Home;
