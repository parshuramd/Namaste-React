import React from "react";
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
          if (heading === "default") {
            setHeading("Changed");
          } else {
            setHeading("default");
          }
        }}
      >
        {heading}
      </h1>
      <h2 id="second" key="second">
        My second Heading
      </h2>
      <h3 id="third" key="third">
        Third Heading
      </h3>
    </>
  );
};
export default Heading;
