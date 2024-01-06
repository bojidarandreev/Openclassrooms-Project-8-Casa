import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import newDataJs from '../../assets/newData.json'
import Carousel from '../../components/Carousel/Carousel';

import './singleRental.css'

export default function SingleRental() {
  const [appart, setAppart] = useState(null);
	const { id } = useParams();
  const navigate = useNavigate();
  console.log(appart)

  useEffect(() => {
    const data = newDataJs.find((appart) => appart.id === id);
    if (data === undefined) {
      return navigate('/pas-trouve');
    }
    setAppart(data);
  }, [id]);
  if (!appart) return <div>Chargement...</div>
  return (
    <>
    <div className="caroselContainer">
        <Carousel images={appart.pictures} />
      </div>
      <div className="locationInfoContainer">
        <div className="locationInfo-1">
          <h1 className="locationTitle">{appart.title}</h1>
          <h2 className="locationSubTitle">{appart.location}</h2>
          {/* <div>{appart.tags.split(',').map((item, i) => <p key={i}>{item}</p>)}</div> */}
        </div>
        <div className="locationInfo-2">
          <p className="locationRating">Star Rating is {appart.rating} from 5 stars</p>
          <div className="logationHost">
            <p className="locationHostName">{appart.hostName}</p>
            <img src={appart.hostPicture} className="locationHostImage" alt={appart.hostName}></img>
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