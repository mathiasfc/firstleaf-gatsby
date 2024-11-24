import React, { useState } from "react";
import ColorFilter from "@components/ColorFilter";
import ProductCard from "@components/ProductGrid/ProductCard";
import EmptyState from "@components/ProductGrid/EmptyState";
import PlaceholderLoader from "@components/ProductGrid/PlaceholderLoader";
import { useProducts } from "@hooks/useProducts";
import * as styles from "./index.module.scss";

/**
 * The `ProductGrid` component renders a grid of product cards with a color filter.
 * It fetches the product data using a custom hook (`useProducts`) and allows users
 * to filter the products by color.
 */
const ProductGrid: React.FC = () => {
  const { data, isLoading } = useProducts();
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (isLoading) {
    return <PlaceholderLoader />;
  }

  if (!data || data.length === 0) {
    return <EmptyState message="No products available." />;
  }

  // Filter products based on the selected color
  const filteredProducts = selectedColor
    ? data.filter((product) => product.color === selectedColor)
    : data;

  // Show message when no products match the filter
  if (filteredProducts.length === 0) {
    return <EmptyState message="No products found for the selected color." />;
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
