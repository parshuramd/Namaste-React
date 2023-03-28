import React from "react";
import Footer from "./Footer";
import Heading, { CombinedHeading } from "./Heading";
import Header from "./Header";
const Container = ({ about }) => {
  return (
    <>
      <Header home="Home" about={about} contact_us="Contact Us" />
      {/* <Footer /> */}
      {/* <Heading />
      <CombinedHeading />
      <Footer /> */}
    </>
  );
};
export default Container;
