import "./card.css";
function card(props){
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className="card-image"/>
            <h3 className="card-title">{props-title}</h3>
            <p classNane="card-description">{props.description}</p>
        </div>
    );
}
export default card;