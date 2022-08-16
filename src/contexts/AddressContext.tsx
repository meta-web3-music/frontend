import React, { useState } from "react";

const AddressContext = React.createContext();

function AddressProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);
  return (
    <AddressContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export { AddressContext, AddressProvider };
