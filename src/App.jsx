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
          <div className="yellow-display">
            <header className="App-header">
              <h1>Your Cheese Journal.</h1>
            </header>
            <div>
              <CheeseForm />
            </div>
            <div className="test"></div>
            <div className="cheese-res-button">
              <button onClick={handleCheeseRes} className="list-showing-button">
                Hide the cheese!
              </button>
            </div>
          </div>
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
          <div className="yellow-display">
            <header className="App-header">
              <h1>Your Cheese Journal.</h1>
            </header>
            <div>
              <CheeseForm />
            </div>
            <div className="test"></div>
            <div className="cheese-res-button">
              <button
                onClick={handleCheeseRes}
                className="list-not-showing-button"
              >
                Explore more cheese!
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
