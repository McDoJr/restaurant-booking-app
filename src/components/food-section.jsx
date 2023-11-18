import {forwardRef} from "react";
import styles from "./food-section.module.css";
import FoodCard from "./food-card.jsx";
import coffee from "../images/coffee.jpg";
import spaghetti from "../images/spaghetti.jpg";
import pizza from "../images/pizza.jpg";
import chickenjoy from "../images/chickenjoy.jpg";

const FoodSection = ({}, ref) => {

    const list = [
        { name: "Coffe Arabica", price: 20, photo: coffee },
        { name: "Spaghetti Ascila", price: 23, photo: spaghetti },
        { name: "Pizza Sosis", price: 26, photo: pizza },
        { name: "Fried Chicken", price: 28, photo: chickenjoy },
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