import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.player.Name}</h1>
      <h2>{props.player.Position}</h2>
      <img
        className="logo"
        src="https://brandeps.com/logo-download/J/Jaguars-logo-vector-01.svg"
        alt="Jags Logo"
      />
    </div>
  );
};

export default Card;
