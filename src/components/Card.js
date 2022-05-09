import { useLocation } from "react-router-dom";
import '../styles/card.css'

function Card() {
  const location = useLocation();

  return (
    <div className="card1">
      <div className="card-inner">
        <p>{location.state.name}</p>
        <p>{location.state.email}</p>
        <p>{location.state.message}</p>
      </div>
    </div>
  );
}

export default Card;
