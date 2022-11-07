import s from './Map.module.css';
import { GoogleMap,useLoadScript, Marker } from "@react-google-maps/api"

const Map = ({iss_position}) => {
    return (
        <div className="card" id="map">
            {!iss_position ? 'loading...' : 
                <GoogleMap zoom={3} center={{lat: Number(iss_position.latitude), lng: Number(iss_position.longitude)}} mapContainerClassName={s.mapContainer}>
                    <Marker position={{lat: Number(iss_position.latitude), lng: Number(iss_position.longitude)}} />
                </GoogleMap>
            }
        </div>
    )
}

export default Map;