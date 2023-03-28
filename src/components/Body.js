import Container from "./Container";
import Footer from "./Footer";

import ReqApi from "./ReqApi";

function Body({ about }) {
  return (
    <>
      <Container about={about} />
      <ReqApi />
      <Footer />
    </>
  );
}
export default Body;
