import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CheeseForm2.css";

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
    document.location.reload();
  };

  return (
    <div className="cheese-form-div">
      <h2>THE CHEESE FORM</h2>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="field">
          <div className="label">
            <label>Cheese Name</label>
          </div>
          <input
            type="text"
            placeholder="Your cheese name?"
            value={cheeseName}
            onChange={handleCheeseNameChange}
          />
        </div>
        <div className="field">
          <div className="label">
            <label>Creamery</label>
          </div>
          <input
            type="text"
            placeholder="Who made dis?"
            value={cheeseSrc}
            onChange={handleCheeseSrcChange}
          />
        </div>

        <div className="field">
          <div className="label">
            <label>Characteristics</label>
          </div>
          <input
            type="text"
            placeholder="Anything unique? Organic cheese is pretty unique."
            value={cheeseChar}
            onChange={handleCheeseCharChange}
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
            <option>None</option>
          </select>
        </div>
        <div className="field">
          <div className="label">
            <label>Cheese Flavor</label>
          </div>
          <input
            className="flavor"
            type="text"
            placeholder="How would you describe the flavor? Wax poetic!"
            value={cheeseFlavor}
            onChange={handleCheeseFlavChange}
          />
        </div>
        <button type="submit" onClick={submitStateChange}>
          Submit
        </button>
      </form>
    </div>
  );
}
