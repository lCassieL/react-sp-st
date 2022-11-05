import './App.css';
import Location from './components/Location';
import Time from './components/Time';
import Map from './components/Map';
import Crew from './components/Crew';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  const [location, setLocation] = useState({"timestamp": 1667477595, 
                                            "iss_position": {
                                                "longitude": "130.8122", 
                                                "latitude": "-11.8121"}, 
                                            "message": "success"})
  const [crew, setCrew] = useState([])
  const updateLocation = () => {
      let xhr = new XMLHttpRequest()
      let body = ''
      xhr.open('GET', 'http://api.open-notify.org/iss-now.json', true)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
          let json = xhr.responseText
          let data = JSON.parse(json)
          console.log('update L')
          setLocation(data)
          /*setLocation(location => ({
            ...location,
            ...data
          }))*/
        }
      }
      xhr.send(body)
  }

  const updateCrew = () => {
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
        console.log('update C')
        setCrew([...iss_crew])
      }
    }
    xhr.send(body)
}

  useEffect(() => {
    updateLocation()
    updateCrew()
    let timerId = setInterval(() => {updateLocation(); updateCrew()}, 5000)
  }, [])
  
  return (
    <div className="wrapper">
      <Location iss_position={location.iss_position}/>
      <Time date={new Date(Number(location.timestamp)*1000)}/>
      <Map iss_position={location.iss_position}/>
      <Crew crew={crew}/>
    </div>
  );
}

export default App;
