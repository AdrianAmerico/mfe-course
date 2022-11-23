import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

export const Shop = () => (
  <div className="container">
    <div>Name: shop</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

ReactDOM.render(<Shop />, document.getElementById("app"));
