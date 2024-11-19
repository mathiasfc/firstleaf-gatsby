import React from "react";
import * as styles from "./index.module.scss";

interface ProductPriceProps {
  price: string;
  msrp: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price, msrp }) => {
  return (
    <div className={styles.productPrice}>
      {msrp && msrp !== price && (
        <span className={styles.displayMsrp}>{msrp}</span>
      )}
      <span className={styles.displayPrice}>{price}</span>
    </div>
  );
};

export default ProductPrice;
