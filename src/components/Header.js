import React, { useEffect, useState } from "react";
import "./Header.css";
const Header = ({ contact_us, home, about }) => {
  const [info, setInfo] = useState("info");
  const [dataApi, setDataApi] = useState([]);
  // console.log(dataApi);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await data.json();
      // console.log(json);
      setDataApi(json);

      // console.log(12);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="header-compo">
        <div>
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/restaurant-food-house-logo-template_57516-341.jpg?w=2000"
          />
        </div>
        <h1>
          FOOD HOUSE!! <span>Your Cravings Final Destination</span>
        </h1>
        <div className="nav-items">
          <ul>
            <li>{home}</li>
            <li>{about}</li>
            <li>{contact_us}</li>
            <li>{info}</li>
          </ul>
          <button
            onClick={() => {
              setInfo("Changed Through State");
            }}
          >
            Change Info
          </button>
        </div>
      </div>
      {/* <div>
        <ul>
          {dataApi.map((data) => (
            <li key={data.id}>
              {data.name} | {data.address.geo["lat"]}
            </li>
          ))}
        </ul>
        
      </div> */}
    </>
  );
};
export default Header;
