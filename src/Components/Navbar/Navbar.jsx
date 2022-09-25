import React from "react";
import styles from "./Navbar.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import ComingSoonModal from "../../Elements/ComingSoonModal";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = React.useState(false);

  const setIsOpen = (bool) => {
    setIsModelOpen(bool);
  };



  return (
    <div className={styles.Navbar}>
      <ComingSoonModal isOpen={isModelOpen} setIsOpen={setIsModelOpen} />
      <div className={styles.leftSide_header}>
        <img
          src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
          alt="logo"
        />
     
          <ul className={styles.Navbar__listOne}>
            <li>
              BUS TICKETS
            </li>
            <li onClick={() => setIsOpen(true)}>
              rYde<sup style={{fontSize : "xx-small"}} >New</sup>
            </li>
            <li onClick={() => setIsOpen(true)}>
              redRail<sup style={{fontSize : "xx-small"}}>New</sup>
            </li>
          </ul>
        </div>
      <div>

      </div>
      <ul className={styles.Navbar__listTwo}>
        <div className={styles.rightSide_header}>
          <li className={styles.smallFont} onClick={() => setIsOpen(true)}>Print/SMS Ticket</li>
          <li className={styles.smallFont} onClick={() => setIsOpen(true)}>Cancel Ticket</li>
          <li className={styles.smallFont} onClick={() => setIsOpen(true)}>Help</li>
          <li>
            <CgProfile 
              className={styles.icons}
              onClick={() => setIsOpen(true)}
            />
          </li>
          <li>
            <div>
              <RiArrowDropDownLine
                className={styles.icons}
                onClick={() => setIsOpen(true)}
              />
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
