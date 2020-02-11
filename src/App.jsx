import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CheeseList from "./components/cheeseList";
import CheeseForm from "./components/cheeseForm";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(false);
  const [cheeses, setCheese] = useState([]);

  useEffect(() => {
    axios.get("/cheeses").then(res => {
      setCheese(res.data);
      setLoading(false);
      if (loading === false) {
        console.log(cheeses);
      }
    });
  }, [loading]);

  const handleCheeseRes = () => {
    setShowList(!showList);
  };

  return (
    <div className="App">
      {showList ? (
        <React.Fragment>
          <header className="App-header">
            <h1>Your Cheese Journal.</h1>
          </header>
          <div>
            <CheeseForm />
          </div>
          <button onClick={handleCheeseRes}>Explore more cheese!</button>
          <div className="cheese-list">
            <ul>
              {cheeses.map((cheese, key) => {
                return <CheeseList key={key} cheeses={cheese} />;
              })}
            </ul>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <header className="App-header">
            <h1>Your Cheese Journal.</h1>
          </header>
          <div>
            <CheeseForm />
          </div>
          <button onClick={handleCheeseRes}>Explore more cheese!</button>
          <div>
            <p>Cheese results will be displayed below</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
