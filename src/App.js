import './App.css';
import Location from './components/Location/Location';
import Time from './components/Time/Time';
import Map from './components/Map/Map';
import Crew from './components/Crew/Crew';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  const [iss_data, setISSData] = useState({})

  const updateLocation = (callback) => {
      let xhr = new XMLHttpRequest()
      let body = ''
      xhr.open('GET', 'http://api.open-notify.org/iss-now.json', true)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
          let json = xhr.responseText
          let data = JSON.parse(json)
          callback(data)
        }
      }
      xhr.send(body)
  }

  const updateCrew = (location_data) => {
    let xhr = new XMLHttpRequest()
    let body = ''
    xhr.open('GET', 'http://api.open-notify.org/astros.json', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200) {
        let json = xhr.responseText
        let data = JSON.parse(json)
        let iss_crew = data.people.filter((member) => {
          return (member.craft === "ISS" ? true : false)
        })
        setISSData(
            {
                iss_position : {
                    longitude : location_data.iss_position.longitude,
                    latitude : location_data.iss_position.latitude
                },
                timestamp : location_data.timestamp,
                crew : [...iss_crew]
            }
        )
      }
    }
    xhr.send(body)
}

  useEffect(() => {
    updateLocation(updateCrew)
    let timerId = setInterval(() => {updateLocation(updateCrew)}, 5000)
  }, [])
  
  return (
    <div className="wrapper">
      <Location iss_position={iss_data.iss_position}/>
      <Time date={iss_data.timestamp ? new Date(Number(iss_data.timestamp)*1000) : null}/>
      <Map iss_position={iss_data.iss_position}/>
      <Crew crew={iss_data.crew}/>
    </div>
  );
}

export default App;
