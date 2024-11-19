import React from "react";
import * as styles from "./index.module.scss";

/**
 * `PlaceholderLoader` is a loading skeleton component that displays placeholder
 * content while data is being fetched. It simulates the structure of product cards
 * and provides a visual cue to the user that content is loading.
 */
const PlaceholderLoader: React.FC = () => {
  return (
    <>
      <div className={styles.loaderFiltersContainer}>
        <div className={styles.loaderBlock} />
      </div>
      <div className={styles.loaderGridContainer}>
        <div className={styles.loaderCard} />
        <div className={styles.loaderCard} />
        <div className={styles.loaderCard} />
        <div className={styles.loaderCard} />
        <div className={styles.loaderCard} />
        <div className={styles.loaderCard} />
      </div>
    </>
  );
};

export default PlaceholderLoader;
