import React, { useState } from "react";
import ColorFilter from "../ColorFilter";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import * as styles from "./index.module.scss";

const ProductGrid: React.FC = () => {
  const { data, isLoading } = useProducts();
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (isLoading) {
    /** @todo - A fancy loading placeholder */
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    /** @todo - A fancy message */
    return <div>No products available.</div>;
  }

  // Filter products based on the selected color
  const filteredProducts = selectedColor
    ? data.filter((product) => product.color === selectedColor)
    : data;

  // Show message when no products match the filter
  if (filteredProducts.length === 0) {
    return <div>No products found for the selected color.</div>;
  }

  // Get a list of unique colors from the products
  const colors = [...new Set(data.map((product) => product.color))];

  return (
    <div>
      <ColorFilter
        colors={colors}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
        productCount={filteredProducts.length}
      />

      <ul className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductGrid;
