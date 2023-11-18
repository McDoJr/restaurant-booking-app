import style from "./food-card.module.css";

const FoodCard = ({name, price, photo}) => {
    return (
        <div className={style.container}>
            <img src={photo} alt={`${name} image`}/>
            <h3>{name}</h3>
            <span>{`$${price}`}</span>
        </div>
    )
}

export default FoodCard;