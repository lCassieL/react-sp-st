import s from './Crew.module.css';
const Crew = ({crew}) => {
    return (
        <div className="card" id="crew">
            {crew ? crew.map((member, index) => (
                <div className={"card " + s.crew} key={index}>
                    <i className={s.bi + " bi-person-circle"}><span className={s.name}>{member.name}</span></i>
                </div>
            )) : 'loading...'}
            <div className={"card "+ s.total}>Total amount: {crew ? crew.length : 'loading...'} people on ISS</div>
        </div>
    )
}

export default Crew;