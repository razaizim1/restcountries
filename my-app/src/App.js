import './App.css';
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Rest Countries</h1>
      <FetchCountries></FetchCountries>
    </div>
  );
}



function FetchCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  })

  return (
    <div>
      <h1>All Countries {countries.length}</h1>
      {
        countries.map((country) => <Country official={country.official} name={country.name.common}></Country>)
      }
    </div>
  )
}


function Country(props) {
  const bodyStyle = {
    border: '5px solid red',
    backgroundColor: 'black',
    color: 'white',
    width: '500px',
    height: '100px',
    margin: '10px auto'
  }

  return (
    <div style={bodyStyle}>
      <h1>Name: {props.official}{props.name}</h1>
    </div>
  )
}

export default App;
