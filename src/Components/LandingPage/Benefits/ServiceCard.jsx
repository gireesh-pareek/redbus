import React from "react";
import styles from "./Services.module.css";

function ServiceCard (props) {
    return(
        <div className={styles.flexItems}>
            <span className={styles.itemimg}>
                <img
                    src={props.img}
                    alt="coupon-3"
                />
            </span>
            <span>{props.title}</span>
            <span className={styles.desc}>{props.desc}</span>
        </div>
    );
}

export default ServiceCard;