import { useState, createContext } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState([]);
  const [colorMode, setColorMode] = useState("dark");

  //   const addCard = (newCard) => setWallet([...wallet, newCard]);

  const addCard = (newCard) => {
    const updatedWallet = wallet.map((card) => ({
      ...card,
      isActive: false,
    }));

    const newActiveCard = { ...newCard, isActive: true };
    setWallet([...updatedWallet, newActiveCard]);
  };

  const setActiveCard = (index) => {
    const updatedWallet = wallet.map((card, i) => ({
      ...card,
      isActive: i === index,
    }));
    setWallet(updatedWallet);
  };

  const removeCard = (indexToDelete) => {
    const filteredWallet = wallet.filter((_, index) => index !== indexToDelete);
    setWallet(filteredWallet);
  };

  const toggleColorMode = (mode) => setColorMode(mode);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        addCard,
        colorMode,
        toggleColorMode,
        setActiveCard,
        removeCard,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
