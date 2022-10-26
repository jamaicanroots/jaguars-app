import Card from "../Card/Card";
import "./cards-container.css";

const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      {props.jagsData.map((player, index) => {
        return <Card key={index} player={player} />;
      })}
    </div>
  );
};

export default CardsContainer;
