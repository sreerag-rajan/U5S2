import { useState, useEffect } from "react";
import "./Rentals.css";

export const Rentals = ({data,setData}) => {
  const[text,setText] = useState("")
  

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button onClick={()=>{
          let newarray = [...data]
          newarray.sort((a,b)=>{
            if(a.id<b.id){
              return -1
            }
            return 1
          })
          setData(newarray)
        }} className="sortById">Sort by ID</button>
        <button onClick={()=>{
          let newarray = [...data]
          newarray.sort((a,b)=>{ return a.rent-b.rent})
          setData(newarray)
        }} className="sortByRentAsc">Rent Low to high</button>
        <button onClick={()=>{
          let newarray = [...data]
          newarray = newarray.sort((a,b)=> b.rent-a.rent)
          setData(newarray)
        }} className="sortByRentDesc">Rent High to low</button>
        <button onClick={()=>{
          let newarray = [...data]
          newarray.sort((a,b)=>{ return a.areaCode-b.areaCode})
          setData(newarray)
        }} className="sortByAreaAsc">Area Low to high</button>
        <button onClick={()=>{
          let newarray = [...data]
          newarray.sort((a,b)=>{ return b.areaCode-a.areaCode})
          setData(newarray)
        }} className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        onChange={(e)=>{
          setText(e.target.value);
          let newarray = [...data];
          let x = newarray.filter((el)=>{
            if(el.address===text){
              return el;
            }
          })
          setData(x);
        }}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
