import React from "react";
import Coupon from "./Coupon";
import styles from "./Coupon.module.css";
import couponsData from "./CouponData";

function populateCoupon(couponData){
  return (
    <Coupon
      id = {couponData.id} 
      header={couponData.header}
      img = {couponData.img}
      footer={couponData.footer}
    />
  );
}
const Coupons = () => {
  return (
    <div className={styles.couponContainer}>

      <div className={styles.flex}>
        {couponsData.map(populateCoupon)}
      </div>

      {/* Floating Container */}

      <div className={styles.float}>
        <div >
          <img
            src="https://st.redbus.in/Images/RHSS/2022/hero/100x100.png"
            alt="Offer"
          />
        </div>
        <div className={styles.writingBox}>
          <h3>Save upto Rs 300* on your bus tickets.</h3>
          <p>Book your favourite seat now.</p>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
