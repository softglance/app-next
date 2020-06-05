import React, { useState } from "react";
import cities from './us-cities.json'
import './index.css';


const DisplayCities = ({ val }) => {
  return val.map(obj => {
    return (
      <h6 style={{ margin: '10px'}}>{obj.name} -  {obj.country} -  {obj.details.likes}</h6>
    );
  });
};


const App = () => {
  const [objCity, setObjCity] = useState(cities);

  // console.log('cities ', JSON.stringify(cities) )

  const handleSearch = e => {
    console.log(e.target.value);
    const searchKey = e.target.value;
   
   // eslint-disable-next-line 
   const newObj = cities.filter(objVal => {
      if (searchKey === undefined) return objVal;

      if (objVal.name.includes(searchKey)) {
        return objVal;
      }
    });
    console.log(newObj);
    setObjCity(newObj);
  };

  return (
    <div className="App">
      <h1>React Typeahead</h1>
      <input style={{
        backgroundColor: '#fff',
        margin: '10px',
        fontSize: '24px',
      }} type="search" placeholder="Search.." onChange={handleSearch} />
      <h6 style={{ margin: '10px'}}>Name - Country -  Likes</h6>
      <DisplayCities val={objCity} />
    </div>
  );
};

export default App;
