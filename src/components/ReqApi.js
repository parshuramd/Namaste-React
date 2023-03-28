import React, { useEffect, useState } from "react";
import RenderDataFromApi from "./RenderDataFromApi";

const ReqApi = () => {
  const [reqData, setReqData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(reqData);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const data1 = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.582663010689362&lng=73.72609610491192&page_type=DESKTOP_WEB_LISTING"
      );
      console.log(data1);
      const json = await data1.json();
      console.log(json);
      setReqData(json);
      setIsLoading(false);
    }
    getData();
  }, []);
  return (
    <>
      <RenderDataFromApi data={reqData} isLoading={isLoading} />
    </>
  );
};

export default ReqApi;
