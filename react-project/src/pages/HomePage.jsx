//React
import { useContext } from "react";
//Components
import Card from "../components/Card";
//Contexts
import { WalletContext } from "../context/WalletContext";
import { Link } from "react-router-dom";

function HomePage() {
  const { wallet, setActiveCard, removeCard } = useContext(WalletContext);

  const activeCard = wallet.find((card) => card.isActive);

  return (
    <>
      <h1>E-Wallet</h1>
      <Link to="/SettingsPage">
        <button id="settings-btn">Settings</button>
      </Link>
      {wallet.length === 0 ? (
        <h2>No cards added yet</h2>
      ) : (
        <>
          <h2>Active Card:</h2>
          {activeCard ? (
            <Card
              cardProvider={activeCard.cardProvider}
              cardNumber={activeCard.cardNumber}
              firstName={activeCard.firstName}
              lastName={activeCard.lastName}
              expirationDate={activeCard.expirationDate}
              ccv={activeCard.ccv}
            />
          ) : (
            <p>No active card</p>
          )}

          <h2>Inactive Cards:</h2>
          {wallet.map((card, index) => {
            if (card.isActive === false) {
              return (
                <>
                  <Card
                    cardProvider={card.cardProvider}
                    cardNumber={card.cardNumber}
                    firstName={card.firstName}
                    lastName={card.lastName}
                    expirationDate={card.expirationDate}
                    ccv={card.ccv}
                  />
                  <div>
                    <button
                      className="card-btn"
                      onClick={() => setActiveCard(index)}
                    >
                      Activate
                    </button>
                    <button
                      className="card-btn"
                      onClick={() => removeCard(index)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              );
            }
          })}
        </>
      )}

      <Link to="/AddCardPage">
        <button id="add-card-btn">Add new card</button>
      </Link>
    </>
  );
}

export default HomePage;
