import {forwardRef} from "react";
import styles from "./food-section.module.css";
import FoodCard from "./food-card.jsx";

const FoodSection = ({}, ref) => {

    const list = [
        { name: "Coffe Arabica", price: 20, photo: require("../images/coffee.jpg") },
        { name: "Spaghetti Ascila", price: 23, photo: require("../images/spaghetti.jpg") },
        { name: "Pizza Sosis", price: 26, photo: require("../images/pizza.jpg") },
        { name: "Fried Chicken", price: 28, photo: require("../images/chickenjoy.jpg") },
    ];

    return (
        <section className={styles.container} ref={ref}>
            <h1>Today's Special Menu</h1>
            <div className={styles.box}>
                {list.map(({name, price, photo}, index) => <FoodCard name={name} price={price} photo={photo} key={index}/>)}
            </div>
        </section>
    )
}

export default forwardRef(FoodSection);