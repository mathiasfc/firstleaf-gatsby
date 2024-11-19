import React from "react";
import * as styles from "./index.module.scss";

type ProductPriceProps = {
  /** The current selling price of the product. */
  price: string;

  /** The original retail price of the product, typically the MSRP (Manufacturer's Suggested Retail Price). */
  retailPrice: string;
};

/**
 * A component that displays the price of a product, including the retail price (if different from the current price).
 */
const ProductPrice: React.FC<ProductPriceProps> = ({ price, retailPrice }) => {
  return (
    <div className={styles.productPrice}>
      {retailPrice && retailPrice !== price && (
        <span className={styles.displayMsrp}>{retailPrice}</span>
      )}
      <span className={styles.displayPrice}>{price}</span>
    </div>
  );
};

export default ProductPrice;
