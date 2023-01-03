import React from "react";
import ReactDOM from "react-dom/client";
const Container = () => (
  <div id="container">
    <h1 id="first" key="first">
      My First Heading
    </h1>
    <h2 id="second" key="second">
      My second Heading
    </h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
