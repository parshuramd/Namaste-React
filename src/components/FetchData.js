import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFromAPI = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const json = await data.json();
      console.log(json);
      setData(json);
    };
    fetchFromAPI();
  }, []);
  console.log(data);
  //   console.log(data.products);
  return (
    <div>
      {/* <ul>
        {data.products.map((item) => (
          <li key={item.id}>
            {item.title} ||| {item.price}
          </li>
        ))}
      </ul> */}
      {/* <p>{data.products[0].title}</p> */}
    </div>
  );
};
export default FetchData;
