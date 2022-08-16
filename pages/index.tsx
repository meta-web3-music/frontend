import type { NextPage } from "next";
import Header from "../src/components/header";
import HottestSongs from "../src/components/HottestSongs";
import { AddressProvider } from "../src/contexts/AddressContext";

const Home: NextPage = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <AddressProvider>
        <Header />
      </AddressProvider>
      <HottestSongs />
    </div>
  );
};

export default Home;
