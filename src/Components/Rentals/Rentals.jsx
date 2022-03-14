import "./Rentals.css";

export const Rentals = ({data,setData}) => {
  
  

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button onClick={()=>{
          setData(data.sort((a,b) =>a.id-b.id))
        }} className="sortById">Sort by ID</button>
        <button onClick={()=>{
          setData(data.sort((a,b) =>a.rend-b.rent))
        }} className="sortByRentAsc">Rent Low to high</button>
        <button onClick={()=>{
          setData(data.sort((a,b) =>b.id-a.id))
        }} className="sortByRentDesc">Rent High to low</button>
        <button onClick={()=>{
          setData(data.sort((a,b) =>a.areaCode-b.areaCode))
        }} className="sortByAreaAsc">Area Low to high</button>
        <button onClick={()=>{
          setData(data.sort((a,b) =>b.areaCode-a.areaCode))
        }} className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
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
