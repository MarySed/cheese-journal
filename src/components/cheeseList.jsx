import React, { useState, useEffect } from "react";
import "../CheeseList.css";

export default function CheeseList(props) {
  console.log(props.cheeses);

  return (
    <div className="cheese-data">
      <li>{props.cheeses.id}</li>
      <li>{props.cheeses.cheese_name_en}</li>
      <li>{props.cheeses.cheese_name_fr}</li>
      <li>{props.cheeses.manufacturer_name_en}</li>
      <li>{props.cheeses.flavor_en}</li>
      <li>{props.cheeses.characteristics_en}</li>
      <li>{props.cheeses.category_type}</li>
      <li>{props.cheeses.milk_type}</li>
      <li>{props.cheeses.rind_type}</li>
    </div>
  );
}
