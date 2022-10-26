import "./App.css";
import CardsContainer from "./CardsContainer/CardsContainer";
import jagsData from "./data.json";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const setNewQuery = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const filteredData = jagsData.Defense.filter((player) => {
    return player.Name.toLocaleLowerCase().includes(input.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <h1> Jacksonville Jaguars </h1>
      <SearchBar onChangeQuery={setNewQuery} />
      <CardsContainer jagsData={filteredData} />
    </div>
  );
};

export default App;
