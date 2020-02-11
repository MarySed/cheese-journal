import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import CheeseList from "./components/cheeseList";
import CheeseForm from "./components/cheeseForm";

export default function App() {
  /*
  const [loading, setLoading] = useState(true);
  const [cheeses, setCheese] = useState([]);

  useEffect(() => {
    axios.get("/cheeses").then(res => {
      setCheese(res.data);
      setLoading(false);
      console.log("axios", cheeses);
    });
  }, []);
  */
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cheese App!</h1>
      </header>
      <div>
        <CheeseForm />
      </div>
      <div>
        <CheeseList />
      </div>
    </div>
  );
}
