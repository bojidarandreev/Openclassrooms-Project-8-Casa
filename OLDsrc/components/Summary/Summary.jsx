import "./summary.scss";

const Summary = function ({ title, details }) {
  const hasDetails = details[0].length <= 1;
  

  if (hasDetails) {
    return <details className="summary">
    <summary className="summary__title">{title}</summary>        
      <p className="summary__details summary__single">{details}</p>
  </details>;
    }
    return <details className="summary">
    <summary className="summary__title">{title}</summary>
    {details.map((detail) => (
      <p key={detail} className="summary__details summary__multiple">{detail}</p>
    ))}
  </details>;

    



    //EXAMPLE
  // if (hasDetails) {
  //   return <li className="item">{title} ✔</li>;
  // }
  // return <li className="item">{details}</li>;



//   hasDetails ? () => {
//     console.log("Returne that when True");
//     return (
//       <details className="summary">
//         <summary className="summary-title">{title}</summary>
//         {details.map((detail) => (
//           <p className="summary-details">{detail}</p>
//         ))}
//       </details>
//     );
   
//   } : () => {
//     console.log("Returne that when False");
//   return (
    
//     <details className="summary">
//       <summary className="summary-title">{title}</summary>        
//         <p className="summary-details">{details}</p>
//     </details>
//   ); 
// };



};

export default Summary;

