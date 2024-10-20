//React
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function SettingsPage() {
  const { colorMode } = useContext(WalletContext);
  const { toggleColorMode } = useContext(WalletContext);

  const handleColorMode = (event) => toggleColorMode(event.target.value);
  console.log(colorMode);

  return (
    <>
      <h1>Settings</h1>
      <select id="color-select" onChange={handleColorMode} value={colorMode}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="fluffy">Fluffy</option>
      </select>
      <Link to="/">
        <button>Back to Wallet</button>
      </Link>
    </>
  );
}

export default SettingsPage;
