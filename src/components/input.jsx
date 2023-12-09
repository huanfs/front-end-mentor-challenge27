import icon_button from "../assets/images/icon-arrow.svg";
const Input = (props) => {
    function inputChecker(t){
        t.target.value.length<7?t.target.value=`${t.target.value}.`:null
        props.set(t.target.value);
    }
    return(
        <form>
            <input type="text" placeholder="search for any ip address or domain"
            onChange={inputChecker} maxLength="7"/>
            <button type="button" onClick={props.action}><img src={icon_button}/></button>
        </form>
    )
}

export default Input;