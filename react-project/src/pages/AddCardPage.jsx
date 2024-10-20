//React
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
//Components
import Card from "../components/Card";
//Contexts
import { WalletContext } from "../context/WalletContext";

function AddCardPage() {
  //Input fields
  const [cardProvider, setCardProvider] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [ccv, setCcv] = useState("");
  //Wallet
  const { wallet } = useContext(WalletContext);
  const { addCard } = useContext(WalletContext);

  const handleCardProvider = (event) => setCardProvider(event.target.value);
  const handleCardNumber = (event) => {
    let value = event.target.value.replace(/\s+/g, "");
    value = value.replace(/(\d{4})/g, "$1 ").trim();
    if (value.length > 19) {
      alert("Maximum amount of digits reached (16)");
    } else {
      setCardNumber(value);
    }
  };
  const handleFirstName = (event) => {
    const name = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(name)) {
      setFirstName(event.target.value);
    } else {
      alert("Name must only contain letters");
    }
  };
  const handleLastName = (event) => {
    const name = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(name)) {
      setLastName(event.target.value);
    } else {
      alert("Name must only contain letters");
    }
  };
  const handleExpiratonDate = (event) => {
    const selectedDate = new Date(event.target.value);
    const today = new Date();
    if (selectedDate > today) {
      setExpirationDate(event.target.value);
    } else {
      alert("Expiration date must be a future date");
    }
  };
  const handleCcv = (event) => setCcv(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (wallet.length < 4) {
      if (
        cardProvider &&
        cardNumber &&
        firstName &&
        lastName &&
        expirationDate &&
        ccv
      ) {
        const newCard = {
          cardProvider,
          cardNumber,
          firstName,
          lastName,
          expirationDate,
          ccv,
        };
        addCard(newCard);
        console.log(wallet);

        alert("Card successfully added to wallet");

        setCardProvider("");
        setCardNumber("");
        setFirstName("");
        setLastName("");
        setExpirationDate("");
        setCcv("");
      } else {
        alert("All details need to be filled out correctly");
      }
    } else {
      alert("Maximum of 4 cards reached");
    }
  };
  return (
    <>
      <h1>Add Card</h1>
      <Card
        cardProvider={cardProvider || "Bank"}
        cardNumber={cardNumber || "XXXX XXXX XXXX XXXX"}
        firstName={firstName || "Jane"}
        lastName={lastName || "Doe"}
        expirationDate={expirationDate || "MM/YY"}
        ccv={ccv}
      />

      <form onSubmit={handleSubmit}>
        <label htmlFor="bank-select">Card Provider:</label>
        <select
          id="bank-select"
          value={cardProvider}
          onChange={handleCardProvider}
          required
        >
          <option hidden disabled value="">
            Select Bank
          </option>
          <option value="Skandia">Skandia</option>
          <option value="Nordea">Nordea</option>
          <option value="Swedbank">Swedbank</option>
          <option value="SEB">SEB</option>
        </select>
        <label htmlFor="card-number">Card Number:</label>
        <input
          id="card-number"
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          value={cardNumber}
          onChange={handleCardNumber}
          pattern="\d{4} \d{4} \d{4} \d{4}"
          required
        />
        <div className="input-wrapper">
          <div className="name-input">
            <label htmlFor="first-name">First Name:</label>
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstName}
              required
            />
          </div>
          <div className="name-input">
            <label htmlFor="last-name">Last Name:</label>
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastName}
              required
            />
          </div>
        </div>

        <div className="exp-ccv">
          <div>
            <label htmlFor="expiration-date">Expiration Date:</label>
            <br />
            <input
              id="expiration-date"
              type="month"
              value={expirationDate}
              onChange={handleExpiratonDate}
              required
            />
          </div>
          <div>
            <label htmlFor="ccv">CCV:</label>
            <br />
            <input
              id="ccv"
              type="text"
              placeholder="CCV"
              value={ccv}
              onChange={handleCcv}
              pattern="\d{3,4}"
              required
            />
          </div>
        </div>

        <button type="submit">Add Card</button>
      </form>

      <Link to="/">
        <button>Back to Wallet</button>
      </Link>
    </>
  );
}

export default AddCardPage;
