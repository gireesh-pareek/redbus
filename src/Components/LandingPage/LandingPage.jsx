import React from "react";
import Services from "./Benefits/Services";
import Coupons from "./CouponSection/Coupons";
import styles from "./LandingPage.module.css";
import Awards from "./Awards and Recognition/Awards";
import GlobalPresence from "./Global Presence/GlobalPresence";


const LandingPage = () => {

  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");

  const onDepartureChange = (e) => {
    let value = e.target.value;
    setDeparture(value);
  };

  const onArrivalChange = (e) => {
    let value = e.target.value;
    setArrival(value);
  };

  const onDateChange = (e) => {
    let value = e.target.value;
    setDate(value);
  }

  return (
    <div>
      <div className={styles.LandingPage__mainBanner}>
        <div className={styles.LandingPage__form}>
          <div className={styles.LandingPage__form__departure}>            
            <div className={styles.LandingPage__form__departure__input}>

              <input
                type="text"
                placeholder="From"
                value={departure}
                onChange={onDepartureChange}
              />
            </div>
          </div>
          <div className={styles.LandingPage__form__arrival}>
            <div className={styles.LandingPage__form__arrival__input}>
              <input
                type="text"
                placeholder="To"
                value={arrival}
                onChange={onArrivalChange}
              />
            </div>
          </div>
          <div>
            <div className={styles.LandingPage__form__date}>
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={onDateChange}
              />
            </div>
          </div>
          <div className={styles.LandingPage__form__button}>
            <button
              onClick={() => {
                let departureTemp = departure;
                let arrivalTemp = arrival;
              }}
            >
              Search Bus
            </button>
          </div>
        </div>
      </div>
      <Coupons />
      <Services />
      <Awards />
      <GlobalPresence />
    </div>
  );
};

export default LandingPage;
