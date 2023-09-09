import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountry}) => {
   const {name,flags,population,area,cca3} = country;
   const [visited,setVisited] =useState(false);

   let handleVisited = () =>{
    setVisited(!visited);
   }
  return (
    <div className={`country ${visited && 'visited'}`}>
        <h3>Name: {name?.common}</h3>
        <img style={{height:200, width:300}} src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area} km<sup>2</sup></p>
        <p><small>Code:{cca3}</small></p>
        <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button> <br/> <br/>
        <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
        <p>{visited ? "I have visited this Country":"I want to visit"}</p>
    </div>
  )
}

export default Country