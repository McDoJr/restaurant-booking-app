import styles from "./menu-section.module.css";
import MenuCard from "../../components/menu-card.jsx";
import appertizers from "../../images/appertizer.jpg";
import mainCourse from "../../images/main_course.jpg";
import desserts from "../../images/desserts.jpg";
import drinks from "../../images/drinks.jpg";
import salad from "../../images/salad.jpg";
import croquette from "../../images/croquette.jpg";
import sambosa from "../../images/sambosa.jpg";
import canape from "../../images/canape.jpg";
import ascpicJelly from "../../images/aspic_jelly.jpg";
import sirloinSteak from "../../images/sirloin_steak.jpg";
import koreanSoup from "../../images/korean_soup.jpg";
import salmonPasta from "../../images/salmon_pasta.jpg";
import chickenCurry from "../../images/chicken_curry.jpg";
import dimsum from "../../images/dimsum.jpg";
import panacottaPancake from "../../images/pancake.jpg";
import icecream from "../../images/ice_cream.jpg";
import brownies from "../../images/brownies.jpg";
import americanPie from "../../images/american_pie.jpg";
import banoffie  from "../../images/banoffie.jpg";
import avocadoShake from "../../images/avocado_shake.jpg";
import sangerCoffee from "../../images/sanger_coffee.jpg";
import greenTea from "../../images/green_tea.jpg";
import lemonTea from "../../images/lemon_tea.jpg";
import chocolateMilk from "../../images/chocolate_milk.jpg";

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
                { name: "Salad", price: 50, photo: salad },
                { name: "Croquette", price: 22, photo: croquette },
                { name: "Sambosa", price: 37, photo: sambosa },
                { name: "Canape", price: 41, photo: canape },
                { name: "Ascpic Jelly", price: 19, photo: ascpicJelly }
            ],
            color: "#f2af5c",
            background: appertizers,
            isInverted: false
        },
        {
            heading: "Main Course",
            items: [
                { name: "Sirloin Steak", price: 50, photo: sirloinSteak  },
                { name: "Korean Spicy Soup", price: 22, photo: koreanSoup  },
                { name: "Salmon Pasta", price: 37, photo: salmonPasta  },
                { name: "Chicken Curry Special", price: 41, photo: chickenCurry  },
                { name: "Dimsum", price: 19, photo: dimsum  }
            ],
            color: "#000000",
            background: mainCourse,
            isInverted: true
        },
        {
            heading: "Good Desserts",
            items: [
                { name: "Panacotta Pancake", price: 50, photo: panacottaPancake   },
                { name: "Ice Cream", price: 22, photo: icecream },
                { name: "Brownies", price: 37, photo: brownies },
                { name: "American Pie", price: 41, photo: americanPie },
                { name: "Banoffie", price: 19, photo: banoffie }
            ],
            color: "#f2af5c",
            background: desserts,
            isInverted: false
        },
        {
            heading: "Hot & Cold Drinks",
            items: [
                { name: "Avacado Milkshake", price: 50, photo: avocadoShake },
                { name: "Sanger Coffee", price: 22, photo: sangerCoffee },
                { name: "Green Tea", price: 37, photo: greenTea },
                { name: "Lemon Tea", price: 41, photo: lemonTea },
                { name: "Chocolate Milk Anger", price: 19, photo: chocolateMilk }
            ],
            color: "#000000",
            background: drinks,
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