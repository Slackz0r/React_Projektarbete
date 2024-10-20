const Card = ({
  cardProvider,
  cardNumber,
  firstName,
  lastName,
  expirationDate,
  ccv,
}) => {
  const formatExpirationDate = (date) => {
    if (!date || date === "MM/YY") {
      return date;
    }
    const [year, month] = date.split("-");
    return `${month} / ${year.slice(2)}`;
  };

  const cardClass = `card-wrapper ${cardProvider.toLowerCase()}`;

  return (
    <div className={cardClass}>
      <div className="info-wrapper">
        <div className="card-logo"></div>
        <div className="card-bank">{cardProvider}</div>
      </div>
      <p className="card-number">{cardNumber}</p>
      <div>
        <div className="info-wrapper">
          <p className="holder-valid">CARD HOLDER</p>
          <p className="holder-valid">VALID THRU</p>
        </div>
        <div className="info-wrapper">
          <div className="holder-name">{firstName + " " + lastName}</div>
          <div>{formatExpirationDate(expirationDate)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
