const Time = ({date}) => {
    const dateTemplate = () => {
        let day = date.toLocaleString('en-US', {weekday: 'long'})
        let month = date.toLocaleString('en-US', {month: 'short'})
        let date_str = `Current UTC time: ${date.getUTCHours()}:${String(date.getUTCMinutes()).padStart(2, '0')}\n
                        ${day}, ${date.getUTCDate()} ${month} ${date.getUTCFullYear()}`
        let newlines_str = date_str.split('\n').map((i, index) => {
            return <div key={index}>{i}</div>
        })
        return newlines_str
    } 
    return (
        <div className="card" id="mainNav">
            {console.log('render time')}
            {dateTemplate()}
        </div>
    )
}

export default Time