import React from "react";
import Spinner from "./Spinner";

const RenderDataFromApi = ({ data, isLoading }) => {
  return (
    <div className="resta">
      {isLoading && <Spinner />}
      {data && !isLoading && (
        <>
          {data.data.cards[2].data.data.cards.map((card) => (
            <div className="container">
              <img
                className="resta-img"
                key={card.data.cloudinaryImageId}
                alt="rest"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  card.data.cloudinaryImageId
                }
              />
              <h2 className="resta-title">{card.data.name}</h2>
              <p className="resta-title">{card.data.cuisines.join(", ")}</p>
              <p className="resta-title">{card.data.area}</p>
              <p className="resta-price">
                {card.data.costForTwoString.slice(0, 4)}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default RenderDataFromApi;
