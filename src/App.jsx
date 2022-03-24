import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const[displayForm, setDisplayForm] = useState(false)
  const[data,setData] = useState([]);
  // const[table,setTable] = useState([]);

  useEffect(()=>{
    displayData();
  },[displayForm])
  function toggleDisplay(){
    setDisplayForm(!displayForm);
  }
  
  function displayData(){
    
    axios.get("http://localhost:8080/houses").then(res => setData(res.data))
    setData(data);
  }
  return (
    <div className="App">
      <button onClick={()=>{
        setDisplayForm(!displayForm);
      }} className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
        {displayForm?"Show Table":"Show Form"}
      </button>
      {displayForm?<AddHouse toggleDisplay={toggleDisplay}/>:<Rentals data = {data} setData={setData}/>}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
