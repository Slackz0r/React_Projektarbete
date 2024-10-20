import "./App.css";
//React
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
//Contexts
import { WalletContext, WalletProvider } from "./context/WalletContext";
//Pages
import HomePage from "./pages/HomePage";
import AddCardPage from "./pages/AddCardPage";
import SettingsPage from "./pages/SettingsPage";

//Application
function App() {
  return (
    <>
      <WalletProvider>
        <AppContent />
      </WalletProvider>
    </>
  );
}

function AppContent() {
  const { colorMode } = useContext(WalletContext);

  return (
    <>
      <div id="viewer" className={colorMode}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/AddCardPage" element={<AddCardPage />}></Route>
          <Route path="/SettingsPage" element={<SettingsPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
