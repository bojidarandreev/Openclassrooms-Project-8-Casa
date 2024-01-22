import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import newDataJs from "../../assets/newData.json";
import Carousel from "../../components/Carousel/Carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./singleRental.css";
import DropdownContainer from "../../components/Dropdown/Dropdown";
import Summary from "../../components/Summary/Summary";

export default function SingleRental() {
  const [appart, setAppart] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  //console.log(appart);

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
              <li key={tag}>{tag} </li>
            ))}{" "}
          </ul>
          {/* <div>{appart.tags.split(',').map((item, i) => <p key={i}>{item}</p>)}</div> */}
        </div>
        <div className="locationInfo-2">
          <div>
            {[...Array(5)].map((n, i) => {
              const ratingValue = Number(appart.rating);
              return (
                <span key={i}>
                  <FontAwesomeIcon
                    icon={faStar}
                    color={
                      ratingValue <= i ? "#ccc" : "#ffa500"
                    }
                  />
                </span>
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
          <div className="locationDesctiption"><h3>Description</h3>
            <Summary title="Description" details = {appart.description}/>
          </div>
          <div className="locationEquipements"><h3>Equipements</h3>
          <Summary title="Equipements" details = {appart.equipments}/>
            {/* <div className="locationEquipementsText">{appart.equipments.split(',').map((item, i) => <p key={i}>{item}</p>)}</div> */}
          </div>
          
        </div>
      </div>
    </>
  );
}
