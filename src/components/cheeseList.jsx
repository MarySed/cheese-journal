import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CheeseList() {
  const [loading, setLoading] = useState(true);
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

  return (
    <div>
      <h2>Work in progress</h2>
      <ol>
        {cheeses.map((cheese, index) => (
          <li val={cheese} key={index}>
            {cheese.cheese_name_en}
            {cheese.flavor_en}
          </li>
        ))}
      </ol>
    </div>
  );
}
