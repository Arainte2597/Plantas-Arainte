import "./button.css"
import React, { useState } from "react";

function Button(props) {
  let [colorBtn, setColorBtn] = useState(props.color);

  function handleClick() {
    setColorBtn("#555");
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: colorBtn, marginBotton: "10px" }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default Button;