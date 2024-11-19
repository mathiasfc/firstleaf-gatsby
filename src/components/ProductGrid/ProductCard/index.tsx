import React from "react";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductColor from "./ProductColor";
import ProductMedal from "./ProductMedal";
import { Product } from "../../../types/Products";
import * as styles from "./index.module.scss";

/**
 * A component that displays detailed information about a product, including its image, price, color, and awards.
 */
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <li className={styles.productCard}>
      <div className={styles.imageContainer}>
        <ProductImage src={product.images} alt={product.name} />
      </div>

      <div className={styles.productInfo}>
        <ProductMedal award_highlights={product.award_highlights} />
        <h3 className={styles.productTitle}>{product.display_name}</h3>
        <p className={styles.productTagLine}>{product.tag_line}</p>
        <ProductPrice
          retailPrice={product.display_msrp}
          price={product.display_price}
        />
        <ProductColor color={product.color} />
        <p className={styles.productPairings}>Pairings: {product.pairings}</p>
      </div>
    </li>
  );
};

export default ProductCard;
