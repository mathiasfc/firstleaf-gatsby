import React from "react";
import * as styles from "./index.module.scss";

type ProductColorProps = {
  color: string;
};

const ProductColor: React.FC<ProductColorProps> = ({ color }) => {
  const isRedWine = color.toLowerCase() === "red";
  const isWhiteWine = color.toLowerCase() === "white";

  return (
    <div className={styles.productColor}>
      {isRedWine && (
        <div className={styles.redWineLabel}>
          <span className={styles.labelText}>Red</span>
        </div>
      )}
      {isWhiteWine && (
        <div className={styles.whiteWineLabel}>
          <span className={styles.labelText}>White</span>
        </div>
      )}
    </div>
  );
};

export default ProductColor;
