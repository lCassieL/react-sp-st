const Crew = ({crew}) => {
    return (
        <div className="card" id="siteAds">
            {console.log('render crew')}
            {crew.map((member, index) => (
                <div className="card crew" key={index}>
                    <i className="bi bi-person-circle"><span className="name">{member.name}</span></i>
                </div>
            ))}
            <div className="card total">Total amount: {crew.length} people on ISS</div>
        </div>
    )
}

export default Crew