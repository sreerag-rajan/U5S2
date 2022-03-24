import { useState } from "react";
import axios from "axios"

export const AddHouse = ({toggleDisplay}) => {
  const [formData,setFormData] = useState({
    name:"",
    ownerName:"",
    address:"",
    areaCode:"",
    rent:"",
    preferredTenant:"",
    image:""
  })

  function handleChange(e){
    let {className,value,type,checked} = e.target
    value = type==="checkbox"? checked:value;
    setFormData({...formData,[className]:value})
  }

  function handleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:8080/houses",formData).then(toggleDisplay());
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input onChange={handleChange} type="text" className="name" value={formData.name} required />
        <br />
        <label>ownerName</label>
        <input onChange={handleChange} value={formData.ownerName} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input onChange={handleChange} value={formData.address} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input onChange={handleChange} value={formData.areaCode} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input onChange={handleChange} value={formData.rent} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input onChange={handleChange} value={formData.preferredTenant} checked={"bachelor"} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input onChange={handleChange} value={formData.preferredTenant} checked={"married"} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input onChange={handleChange} value={formData.image} type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
