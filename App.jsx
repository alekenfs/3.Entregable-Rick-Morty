import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ResidentInfo from './Components/ResidentInfo'
import Location from './Components/Location'

function App() {
  const [location, setLocation] = useState({})
  const [locationID, setLocationID] = useState("Type a number 1-126")



  useEffect(() => {
    const ramdomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${ramdomId}`)
      .then(res => (setLocation(res.data)))
  }, [])

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${locationID}`)
      .then(res => (setLocation(res.data)))
    if (locationID > 126) { alert("NO EXISTEN PLANETAS") }

  }

  console.log(location);

  return (
    <div className="App">
      <img className='headerimg' src="https://64.media.tumblr.com/dd09fb72824950040154dfd1a094c945/tumblr_pjug61Pxx81xgc3e1o3_1280.jpg" alt="" />
      <b>Rick and Morty</b>
      <div className='barContainer'><input type="text" value={locationID} onChange={e => setLocationID(e.target.value)} /> <button onClick={searchLocation}>Buscar</button></div>
      <Location
        location={location}
      />
      <br />
      <h1>Residents</h1>

      <ul>
        <div className='container-grid'>
          {location.residents?.map(characters =>

            <ResidentInfo key={characters}
              characters={characters}


            />
          )}
        </div>

      </ul>
    </div>
  )
}

export default App
