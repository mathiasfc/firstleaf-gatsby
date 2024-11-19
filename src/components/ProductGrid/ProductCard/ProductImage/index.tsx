import React from "react";
import * as styles from "./index.module.scss";

type ProductImageProps = {
  src: string;
  alt: string;
};

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className={styles.productImage} loading="lazy" />
  );
};

export default ProductImage;
