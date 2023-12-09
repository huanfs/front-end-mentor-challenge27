
const Results = (props) => {
    return(
        <div className="result">
            <p>{props.info}</p>
            <h2>{props.result!=undefined?props.result:"------"}</h2>
        </div>
    )
}

export default Results;