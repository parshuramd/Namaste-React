import React, { useEffect, useState } from "react";
import RenderDataFromApi from "./RenderDataFromApi";

const ReqApi = () => {
  const [reqData, setReqData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(reqData);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const data1 = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.582663010689362&lng=73.72609610491192&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data1.json();
        setReqData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, []);
  return (
    <>
      {error && <p>No restaurants Found.</p>}
      {!error && <RenderDataFromApi data={reqData} isLoading={isLoading} />}
    </>
  );
};

export default ReqApi;
