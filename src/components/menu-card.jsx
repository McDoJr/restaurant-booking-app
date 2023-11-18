import styles from "./menu-card.module.css";

const MenuCard = ({heading, items, image, backgroundColor, isInverted}) => {

    const getClassName = (name) => {
        return isInverted ? `${styles[name]} ${styles.inverted}` : `${styles[name]}`;
    }

    return (
        <div className={getClassName("container")} style={{backgroundColor: backgroundColor}}>
            <div className={styles.image} style={{backgroundImage: `url(${image})`}}></div>
            <div className={getClassName("details")}>
                <h2>{heading}</h2>
                {items.map(({name, price}, index) => {
                    return (
                        <div key={index}>
                            <h3>{name}</h3>
                            <span>{`$${price}`}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MenuCard;