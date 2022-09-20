import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/Header/header";
import HottestSongs from "./HottestSongs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Header />
        <HottestSongs />
      </div>
    </>
  );
};

export default Home;
