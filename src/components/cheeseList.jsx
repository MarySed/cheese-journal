import React, { useState, useEffect } from "react";
import "../CheeseList.css";

export default function CheeseList(props) {
  //console.log(props.cheeses);

  return (
    <div className="cheese-data">
      <li>
        <strong>Id: </strong>
        {props.cheeses.id}
      </li>
      <li>
        <strong>Name(En): </strong>
        {props.cheeses.cheese_name_en}
      </li>
      <li>
        <strong>Name(Fr): </strong>
        {props.cheeses.cheese_name_fr}
      </li>
      <li>Creamery: {props.cheeses.manufacturer_name_en}</li>
      <li>Flavor: {props.cheeses.flavor_en}</li>
      <li>Characteristics: {props.cheeses.characteristics_en}</li>
      <li>Texture: {props.cheeses.category_type}</li>
      <li>Milk: {props.cheeses.milk_type}</li>
      <li>{props.cheeses.rind_type}</li>
    </div>
  );
}
