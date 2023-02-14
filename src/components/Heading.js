import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const Heading = () => {
  return (
    <h1 id="first" key="first">
      My First Heading
    </h1>
  );
};
export const CombinedHeading = () => {
  const [heading, setHeading] = useState("default");
  return (
    <>
      <h1
        onMouseOver={() => {
          setHeading("Changed");
        }}
      >
        {heading}
      </h1>
      <h2 id="second" key="second">
        My second Heading
      </h2>
      <div>
        <h3 id="third" key="third">
          Third Heading
        </h3>
      </div>
    </>
  );
};
export default Heading;
