import styles from "./menu-section.module.css";
import MenuCard from "../../components/menu-card.jsx";

import {useState} from "react";

const MenuSection = () => {

    const [popup, setPopup] = useState(null);

    const handleClick = (e, photo) => {
        setPopup(photo);
    }

    const cards = [
        {
            heading: "The Appertizers",
            items: [
                { name: "Salad", price: 50, photo: require("../../images/salad.jpg") },
                { name: "Croquette", price: 22, photo: require("../../images/croquette.jpg") },
                { name: "Sambosa", price: 37, photo: require("../../images/sambosa.jpg") },
                { name: "Canape", price: 41, photo: require("../../images/canape.jpg") },
                { name: "Ascpic Jelly", price: 19, photo: require("../../images/aspic_jelly.jpg") }
            ],
            color: "#f2af5c",
            background: require("../../images/appertizer.jpg"),
            isInverted: false
        },
        {
            heading: "Main Course",
            items: [
                { name: "Sirloin Steak", price: 50, photo: require("../../images/sirloin_steak.jpg")  },
                { name: "Korean Spicy Soup", price: 22, photo: require("../../images/korean_soup.jpg")  },
                { name: "Salmon Pasta", price: 37, photo: require("../../images/salmon_pasta.jpg")  },
                { name: "Chicken Curry Special", price: 41, photo: require("../../images/chicken_curry.jpg")  },
                { name: "Dimsum", price: 19, photo: require("../../images/dimsum.jpg")  }
            ],
            color: "#000000",
            background: require("../../images/main_course.jpg"),
            isInverted: true
        },
        {
            heading: "Good Desserts",
            items: [
                { name: "Panacotta Pancake", price: 50, photo: require("../../images/pancake.jpg")   },
                { name: "Ice Cream", price: 22, photo: require("../../images/ice_cream.jpg") },
                { name: "Brownies", price: 37, photo: require("../../images/brownies.jpg") },
                { name: "American Pie", price: 41, photo: require("../../images/american_pie.jpg") },
                { name: "Banoffie", price: 19, photo: require("../../images/banoffie.jpg") }
            ],
            color: "#f2af5c",
            background: require("../../images/desserts.jpg"),
            isInverted: false
        },
        {
            heading: "Hot & Cold Drinks",
            items: [
                { name: "Avacado Milkshake", price: 50, photo: require("../../images/avocado_shake.jpg") },
                { name: "Sanger Coffee", price: 22, photo: require("../../images/sanger_coffee.jpg") },
                { name: "Green Tea", price: 37, photo: require("../../images/green_tea.jpg") },
                { name: "Lemon Tea", price: 41, photo: require("../../images/lemon_tea.jpg") },
                { name: "Chocolate Milk Anger", price: 19, photo: require("../../images/chocolate_milk.jpg") }
            ],
            color: "#000000",
            background: require("../../images/drinks.jpg"),
            isInverted: true
        }
    ];

    const handleClose = (e) => {
        if(e.target.tagName !== 'IMG') {
            setPopup(null);
        }
    }

    return (
        <>
            <section className={styles.container}>
                <h1>The Menu</h1>
                {cards.map(({heading, items, color, background, isInverted}, index) =>
                    <MenuCard heading={heading} items={items} backgroundColor={color} image={background} isInverted={isInverted} handleClick={handleClick} key={index}/>)}
            </section>
            <div className={styles.popup} style={{display: popup ? 'block' : 'none'}} onClick={handleClose}>
                <span>&times;</span>
                <img src={popup} alt="Popop photo"/>
            </div>
        </>
    )
}

export default MenuSection;