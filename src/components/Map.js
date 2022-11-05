import { GoogleMap,useLoadScript, Marker } from "@react-google-maps/api"

const Map = ({iss_position}) => {
    /*const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCBorFjGWECM8YNtDaCxLiJr41bYOdlS5I"
      })*/
    return (
        <div className="card" id="mainContent">
            <GoogleMap zoom={3} center={{lat: Number(iss_position.latitude), lng: Number(iss_position.longitude)}} mapContainerClassName="map-container">
                <Marker position={{lat: Number(iss_position.latitude), lng: Number(iss_position.longitude)}} />
            </GoogleMap>
        </div>
    )
}

export default Map