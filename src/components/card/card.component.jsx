import { Component } from "react";
import './card.style.css'

class Card extends Component {
    render() {
        const { id, firstName, maidenName, image } = this.props.monster;

        return (
            <div className="card-container" key={id}>
                <img
                    alt={`monster ${firstName}`}
                    src={image}
                />
                <h2>{maidenName}</h2>
            </div>
        )
    }
}


export default Card;