const Location = ({iss_position}) => {
    return (
        <div className="card" id="pageHeader">
            ISS is now located at: <br />
            longitude: {iss_position.longitude}, latitude: {iss_position.latitude}
        </div>
    )
}

export default Location