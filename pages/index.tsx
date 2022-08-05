import type { NextPage } from "next";
import Header from "../public/src/components/header";
import HottestSongs from "../public/src/components/HottestSongs";
import { useEffect, useState, useRef } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HottestSongs />
    </>
  );
};

export default Home;
