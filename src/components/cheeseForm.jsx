import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CheeseForm() {
  const [cheeseName, setCheeseName] = useState("");
  const [cheeseSrc, setCheeseSrc] = useState("");
  const [cheeseFlavor, setCheeseFlavor] = useState("");
  const [cheeseTexture, setCheeseTexture] = useState("");
  const [cheeseRind, setCheeseRind] = useState("");
  const [milkType, setMilkType] = useState("");
  const [cheeseChar, setCheeseChar] = useState("");
  const [submitState, setSubmitState] = useState([]);

  const handleCheeseNameChange = event => {
    setCheeseName(event.target.value);
  };

  const handleCheeseSrcChange = event => {
    setCheeseSrc(event.target.value);
    //setSubmitState({ src: event.target.value });
  };

  const handleCheeseFlavChange = event => {
    setCheeseFlavor(event.target.value);
    //setSubmitState({ flavor: event.target.value });
  };

  const handleCheeseTextChange = event => {
    setCheeseTexture(event.target.value);
    //setSubmitState({ texture: event.target.value });
  };

  const handleMilkTypeChange = event => {
    setMilkType(event.target.value);
    //setSubmitState({ milk: event.target.value });
  };

  const handleCheeseRindChange = event => {
    setCheeseRind(event.target.value);
    //setSubmitState({ rind: event.target.value });
  };

  const handleCheeseCharChange = event => {
    setCheeseChar(event.target.value);
  };

  /*

  */
  function submitStateChange() {
    setSubmitState([
      {
        cheese_name_en: cheeseName,
        manufacturer_name_en: cheeseSrc,
        flavor_en: cheeseFlavor,
        category_type: cheeseTexture,
        rind_type: cheeseRind,
        milk_type: milkType,
        characteristics_en: cheeseChar
      }
    ]);
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.post("/cheeses", submitState).then(response => {
      console.log(response);
    });
  };

  console.log(submitState);

  return (
    <div>
      <h1>THE CHEESE FORM</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cheese Name</label>
          <input
            type="text"
            placeholder="Your cheese name?"
            value={cheeseName}
            onChange={handleCheeseNameChange}
          />
        </div>
        <div>
          <label>Creamery</label>
          <input
            type="text"
            placeholder="Creamery?"
            value={cheeseSrc}
            onChange={handleCheeseSrcChange}
          />
        </div>
        <div>
          <label>Texture</label>
          <select onBlur={handleCheeseTextChange}>
            <option>Hard</option>
            <option>Firm</option>
            <option>Semi-soft</option>
            <option>Soft</option>
            <option>Fresh</option>
            <option>Veined</option>
          </select>

          <label>Milk</label>
          <select onBlur={handleMilkTypeChange}>
            <option>Cow</option>
            <option>Goat</option>
            <option>Sheep</option>
            <option>Raw</option>
            <option>Cow and Goat</option>
            <option>Ewe and Goat</option>
            <option>Ewe and Cow</option>
          </select>

          <label>Rind Type</label>
          <select onBlur={handleCheeseRindChange}>
            <option>Washed</option>
            <option>Bloomy</option>
            <option>Brushed</option>
            <option>Brushed</option>
            <option>None</option>
          </select>
        </div>
        <div>
          <label>Cheese Flavor</label>
          <input
            type="text"
            placeholder="Milky? Or maybe nutty?"
            value={cheeseFlavor}
            onChange={handleCheeseFlavChange}
          />
        </div>
        <div>
          <label>Characteristics</label>
          <input
            type="text"
            placeholder="Anything unique?"
            value={cheeseChar}
            onChange={handleCheeseCharChange}
          />
        </div>
        <button type="submit" onClick={submitStateChange}>
          Submit
        </button>
      </form>
    </div>
  );
}
