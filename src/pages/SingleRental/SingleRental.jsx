import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import newDataJs from "../../assets/newData.json";
import Carousel from "../../components/Carousel/Carousel";

import "./singleRental.css";

export default function SingleRental() {
  const [appart, setAppart] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(appart);

  useEffect(() => {
    const data = newDataJs.find((appart) => appart.id === id);
    if (data === undefined) {
      return navigate("/pas-trouve");
    }
    setAppart(data);
  }, [id]);
  if (!appart) return <div>Chargement...</div>;
  return (
    <>
      <div className="caroselContainer">
        <Carousel images={appart.pictures} />
      </div>
      <div className="locationInfoContainer">
        <div className="locationInfo-1">
          <h1 className="locationTitle">{appart.title}</h1>
          <h2 className="locationSubTitle">{appart.location}</h2>
          <ul className="tagGroup">
            {appart.tags.map((tag) => (
              <li>{tag}</li>
            ))}{" "}
          </ul>
          {/* <div>{appart.tags.split(',').map((item, i) => <p key={i}>{item}</p>)}</div> */}
        </div>
        <div className="locationInfo-2">
          <div>
            {[...Array(Number(appart.rating))].map((e, i) => {
              return (
                <p className="star" key={i}>
                  {i}
                </p>
              );
            })}
          </div>
          <div className="logationHost">
            <p className="locationHostName">{appart.host.name}</p>
            <img
              src={appart.host.picture}
              className="locationHostImage"
              alt={appart.host.name}
            ></img>
          </div>
        </div>
        <div className="locationInfo-3">
          <div className="locationDesctiption">
            <h3 className="locationDescriptionTitle">Description</h3>
            <p className="locationDescriptionText">{appart.desctiption}</p>
          </div>
          <div className="locationEquipements">
            <h3 className="locationEquipementsTitle">Equipements</h3>
            {/* <div className="locationEquipementsText">{appart.equipments.split(',').map((item, i) => <p key={i}>{item}</p>)}</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
