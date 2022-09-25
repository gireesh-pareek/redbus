import React from "react";
import styles from "./Services.module.css";
import servicesData from "./ServicesData";
import ServiceCard from "./ServiceCard";

function populateServices (serviceData) {
  return(
    <ServiceCard
      key = {serviceData.id}
      img = {serviceData.img}
      title = {serviceData.title}
      desc = {serviceData.desc}
    />
  );
}

const Services = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgBox}>
        <img
          src="https://s1.rdbuz.com/web/images/home/promise.png"
          alt="Promise-image"
        />
      </div>

      <h1>We promise to deliver</h1>

      <div className={styles.flexContainer}>
        {servicesData.map(populateServices)}
      </div>
    </div>
  );
};

export default Services;
