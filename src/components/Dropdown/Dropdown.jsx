import './dropdown.css'

import * as React from 'react';



// v2
// export default function Dropdown() {

//   const options = [
 
//     { label: 'Fruit', value: 'fruit' },
 
//     { label: 'Vegetable', value: 'vegetable' },
 
//     { label: 'Meat', value: 'meat' },
 
//   ];
 
//   const [value, setValue] = React.useState('fruit');
 
//   const handleChange = (event) => {
 
//     setValue(event.target.value);
 
//   };
 
//   return (
 
//     <div>
 
//       <label>
 
//         What do we eat?
 
//         <select value={value} onChange={handleChange}>
 
//           {options.map((option) => (
 
//             <option value={option.value}>{option.label}</option>
 
//           ))}
 
//         </select>
 
//       </label>
 
//       <p>We eat {value}!</p>
 
//     </div>
 
//   );
 
//  };

// v3

const Dropdown = ({ label, value, options, onChange }) => {

  return (
  
    <label>
  
      {label}
  
      <select value={value} onChange={onChange}>
  
        {options.map((option) => (
  
          <option key={option.value} value={option.value}>{option.label}</option>
  
        ))}
  
      </select>
  
    </label>
  
  );
}

const DropdownContainer = () => {

const options = [

  { label: 'Fruit', value: 'fruit' },

  { label: 'Vegetable', value: 'vegetable' },

  { label: 'Meat', value: 'meat' },

];

const [value, setValue] = React.useState('fruit');

const handleChange = (event) => {

  setValue(event.target.value);

};


return (

  <div>

    <Dropdown

      label="What do we eat?"

      options={options}

      value={value}

      onChange={handleChange}

    />

    <p>We eat {value}!</p>

  </div>

);
}

export default DropdownContainer;









// v4

// const Dropdown = ({ label, value, options, onChange }) => {

//   const [food, setFood] = React.useState('fruit');
 
//   const [drink, setDrink] = React.useState('water');
 
//   const handleFoodChange = (event) => {
 
//     setFood(event.target.value);
 
//   };
 
//   const handleDrinkChange = (event) => {
 
//     setDrink(event.target.value);
 
//   };
 
//   return (
 
//     <div>
 
//       <Dropdown
 
//         label="What do we eat?"
 
//         options={[
 
//           { label: 'Fruit', value: 'fruit' },
 
//           { label: 'Vegetable', value: 'vegetable' },
 
//           { label: 'Meat', value: 'meat' },
 
//         ]}
 
//         value={food}
 
//         onChange={handleFoodChange}
 
//       />
 
//       <Dropdown
 
//         label="What do we drink?"
 
//         options={[
 
//           { label: 'Water', value: 'water' },
 
//           { label: 'Beer', value: 'beer' },
 
//           { label: 'Wine', value: 'wine' },
 
//         ]}
 
//         value={drink}
 
//         onChange={handleDrinkChange}
 
//       />
 
//       <p>We eat {food}!</p>
 
//       <p>We drink {drink}!</p>
 
//     </div>
 
//   );
 
//       };

// export default Dropdown;
