import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import newDataJs from "../../../assets/newData.json";
import "./card.scss";
import Carousel from "../Carousel/Carousel";
import SingleRental from "../../pages/SingleRental/SingleRental";



function CardData() {
  const [locationIsClicked, setlocationIsClicked] = useState(false);
  const setOpenOrClose = () => {
    if (!locationIsClicked) {
      setlocationIsClicked(true);
    } else setlocationIsClicked(false);
    console.log(locationIsClicked);
  };

  return (
    <div className="cards__container">
      {newDataJs.map(appart => <Link key={appart.id} to={`/appart/${appart.id}`} style={{"display": "block"} } className="card">
        <section className="card__content">
          <div className="card__shadow"></div>
          <h3 className="card__title" >{appart.title}</h3>
          <img src={appart.cover} alt={`${appart.title}, proposé par ${appart.host.name} `} className="card__image" />
        </section>
        </Link>)}
    </div>
  )
  }
  
  export default CardData;


  // let currentRental = null;

// let title = null;
// let pictures = null;
// let desctiption = null;
// let hostName = null;
// let hostPicture = null;
// let rating = null;
// let location = null;
// let equipments = null;
// let tags = null;

// const handleCardClick = (currentRental) => {
//   title = currentRental.split("|")[1];
//   pictures = currentRental.split("|")[3].split(",");
//   desctiption = currentRental.split("|")[4];
//   hostName = currentRental.split("|")[5];
//   hostPicture = currentRental.split("|")[6];
//   rating = currentRental.split("|")[7];
//   location = currentRental.split("|")[8];
//   equipments = currentRental.split("|")[9];
//   tags = currentRental.split("|")[10];
// };


  // if (!locationIsClicked)
  //   return (
  //     <div className="cardsContainer">
  //       {newDataJs &&
  //         newDataJs.map((record) => {
  //           return (
  //             <article
  //               key={record.id}
  //               onClick={() => {
  //                 setOpenOrClose();
  //                 handleCardClick(
  //                   `${record.id}|${record.title}|${record.cover}|${record.pictures}|${record.description}|${record.host.name}|${record.host.picture}|${record.rating}|${record.location}|${record.equipments}|${record.tags}`
  //                 );
  //               }}
  //             >
  //               <div className="cardContent">
  //                 <img src={record.cover} />
  //                 {record.title}
  //               </div>
  //             </article>
  //           );
  //         })}
  //     </div>
  //   );

//   return (
//     <>
//       <button
//         onClick={() => {
//           setOpenOrClose();
//         }}
//       >
//         Here will be the Single Location preview
//       </button>
//       <div className="singleRentalContainer">
//         <SingleRental
//           title={title}
//           pictures={pictures}
//           desctiption={desctiption}
//           hostName={hostName}
//           hostPicture={hostPicture}
//           rating={rating}
//           location={location}
//           equipments={equipments}
//           tags={tags}
//         />
//       </div>
//       {/* <Link to="/SingleRental" title={title}
//           pictures={pictures}
//           desctiption={desctiption}
//           hostName={hostName}
//           hostPicture={hostPicture}
//           rating={rating}
//           location={location}
//           equipments={equipments}
//           tags={tags} >
//         Next Step
//       </Link> */}
      


// {/* FIRST FERSION WITH EMBEDDED COMPONENT, FOR DELETE */}
//       {/* <div className="caroselContainer">
//         <Carousel images={pictures} />
//       </div>
//       <div className="locationInfoContainer">
//         <div className="locationInfo-1">
//           <h1 className="locationTitle">{title}</h1>
//           <h2 className="locationSubTitle">{location}</h2>
//           <div>{tags.split(',').map((item, i) => <p key={i}>{item}</p>)}</div>
//         </div>
//         <div className="locationInfo-2">
//           <p className="locationRating">Star Rating is {rating} from 5 stars</p>
//           <div className="logationHost">
//             <p className="locationHostName">{hostName}</p>
//             <img src={hostPicture} className="locationHostImage" alt={hostName}></img>
//           </div>
//         </div>
//         <div className="locationInfo-3">
//           <div className="locationDesctiption">
//             <h3 className="locationDescriptionTitle">Description</h3>
//             <p className="locationDescriptionText">{desctiption}</p>
//           </div>
//           <div className="locationEquipements">
//             <h3 className="locationEquipementsTitle">Equipements</h3>
//             <div className="locationEquipementsText">{equipments.split(',').map((item, i) => <p key={i}>{item}</p>)}</div>
//           </div> 
//         </div>
//       </div> */}
//     </>
//   );

