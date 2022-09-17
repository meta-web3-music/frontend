
import type { NextPage } from "next";
import Header from "../src/components/Header/header";
import HottestSongs from "./HottestSongs";


const Home: NextPage = () => {


  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <HottestSongs />
    </div>
  );
};

export default Home;
