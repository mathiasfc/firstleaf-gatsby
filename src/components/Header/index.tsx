import React from "react";
import Button from "@components/Header/Button";
import Countdown from "@components/Countdown";
import logo from "../../images/logo.svg";
import * as styles from "./index.module.scss";

/**
 * The `Header` component renders the top section of the page, including a brand logo, a countdown timer,
 * and a checkout button.
 */
const Header: React.FC = () => {
  const handleCheckoutClick = () => {
    console.log("Handle checkout button click");
  };

  return (
    <header>
      <div className={styles.innerHeaderContainer}>
        <img src={logo} alt="Brand Logo - Firstleaf" className={styles.logo} />

        <div>
          <Countdown seconds={300} />
          <Button onClick={handleCheckoutClick}>Checkout</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
