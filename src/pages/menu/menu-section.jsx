import styles from "./menu-section.module.css";
import MenuCard from "../../components/menu-card.jsx";
import appertizers from "../../images/appertizer.jpg";
import mainCourse from "../../images/main_course.jpg";
import desserts from "../../images/desserts.jpg";
import drinks from "../../images/drinks.jpg";

const MenuSection = () => {

    const cards = [
        {
            heading: "The Appertizers",
            items: [
                { name: "Salad", price: 50 },
                { name: "Croquette", price: 22 },
                { name: "Sambosa", price: 37 },
                { name: "Canape", price: 41 },
                { name: "Ascpic Jelly", price: 19 }
            ],
            color: "#f2af5c",
            background: appertizers,
            isInverted: false
        },
        {
            heading: "Main Course",
            items: [
                { name: "Sirloin Steak", price: 50 },
                { name: "Korean Spicy Soup", price: 22 },
                { name: "Salmon Pasta", price: 37 },
                { name: "Chicken Curry Special", price: 41 },
                { name: "Dimsum", price: 19 }
            ],
            color: "#000000",
            background: mainCourse,
            isInverted: true
        },
        {
            heading: "Good Desserts",
            items: [
                { name: "Panacotta Pancake", price: 50 },
                { name: "Ice Cream", price: 22 },
                { name: "Sambosa", price: 37 },
                { name: "American Pie", price: 41 },
                { name: "Banoffie", price: 19 }
            ],
            color: "#f2af5c",
            background: desserts,
            isInverted: false
        },
        {
            heading: "Hot & Cold Drinks",
            items: [
                { name: "Avacado Milkshake", price: 50 },
                { name: "Sanger Coffee", price: 22 },
                { name: "Green Tea", price: 37 },
                { name: "Lemon Tea", price: 41 },
                { name: "Chocolate Milk Anger", price: 19 }
            ],
            color: "#000000",
            background: drinks,
            isInverted: true
        }
    ];

    return (
        <section className={styles.container}>
            <h1>The Menu</h1>
            {cards.map(({heading, items, color, background, isInverted}, index) =>
                <MenuCard heading={heading} items={items} backgroundColor={color} image={background} isInverted={isInverted} key={index}/>)}
        </section>
    )
}

export default MenuSection;