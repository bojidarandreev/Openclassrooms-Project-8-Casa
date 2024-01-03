import React, { useState, useEffect } from "react";
import newDataJs from "../../assets/newData.json";
import "./card.css";

let rentalId = null;

const handleCardClick = (ri) => {
  // if (step != null) setStep(ri);

  rentalId = ri;
  console.log(rentalId.split("|"));
  let slideshow = rentalId.split("|")[3].split(",");
  console.log(slideshow);
};

function CardData() {
  const [locationIsClicked, setlocationIsClicked] = useState(false);
  const setOpenOrClose = () => {
    if (!locationIsClicked) {
      setlocationIsClicked(true);
    } else setlocationIsClicked(false);
    console.log(locationIsClicked);
  };

  if (!locationIsClicked)
    return (
      <div className="cardsContainer">
        {newDataJs &&
          newDataJs.map((record) => {
            return (
              <article
                key={record.id}
                // onClick={handleCardClick}
                // onClick={() => handleCardClick(`${record.id}|${record.title}|${record.cover}|${record.pictures}`) }
                onClick={() => {
                  setOpenOrClose();
                  handleCardClick(
                    `${record.id}|${record.title}|${record.cover}|${record.pictures}`
                  );
                }}
              >
                <div className="cardContent">
                  <img src={record.cover} />
                  {record.title}
                </div>
              </article>
            );
          })}
      </div>
    );

  return <p onClick={() => {
    setOpenOrClose();
  }}>Here will be the Single Location preview</p>;
}

export default CardData;
