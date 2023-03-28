import React from "react";
import Spinner from "./Spinner";

const RenderDataFromApi = ({ data, isLoading }) => {
  return (
    <div>
      {isLoading && <Spinner />}
      {data && !isLoading && (
        <div>
          {/* <img
            alt="rest"
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              data.data.cards[2].data.data.cards[0].data.cloudinaryImageId
            }
          /> */}
          {data.data.cards[2].data.data.cards.map((card) => (
            <div className="resta">
              <img
                key={card.data.cloudinaryImageId}
                alt="rest"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  card.data.cloudinaryImageId
                }
              />
              <p>{card.data.name}</p>
            </div>
          ))}
          {/* <img
            alt="rest"
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              data.data.cards[2].data.data.cards[0].data.cloudinaryImageId
            }
          />
          <h1>{data.data.cards[2].data.data.cards[0].data?.name}</h1> */}
        </div>
      )}
    </div>
  );
};

export default RenderDataFromApi;
