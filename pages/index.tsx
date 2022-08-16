import { useState, useRef } from "react";
import type { NextPage } from "next";
import Header from "../src/components/header";
import HottestSongs from "../src/components/HottestSongs";

const Home: NextPage = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <HottestSongs />
    </div>
  );
};

export default Home;
