import React from "react";
import styles from "./Coupon.module.css";

function Coupon (props) {
    return(
        <div className={styles.coupon}>
            <span>{props.header}</span>
            <span className={styles.offerImage}>
                <img
                    src={props.img}
                    alt="coupon-3"
                />
            </span>
            <span>{props.footer}</span>
        </div>
    );
}

export default Coupon;