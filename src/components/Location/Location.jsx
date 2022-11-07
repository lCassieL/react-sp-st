import s from './Location.module.css';
const Location = ({iss_position}) => {
    return (
        <div className="card" id="location">
            {!iss_position ? 'loading...' :
            <div>
                ISS is now located at: <br />
                longitude: {iss_position.longitude}, latitude: {iss_position.latitude}
            </div>
            }
        </div>
    )
}

export default Location;