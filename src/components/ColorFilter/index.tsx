import React from "react";
import filterIcon from "../../images/filter-icon.svg";
import * as styles from "./index.module.scss";

type ColorFilterProps = {
  /** List of available colors for filtering products. */
  colors: string[];

  /** Currently selected color for filtering products. An empty string represents no filter (i.e., all colors). */
  selectedColor: string;

  /** Callback function triggered when a color is selected from the dropdown. */
  onColorChange: (color: string) => void;

  /** Number of products that match the selected filter criteria. */
  productCount: number;
};

/**
 * `ColorFilter` is a dropdown filter component for selecting a product color.
 * It displays the number of products matching the selected filter and provides a dropdown for filtering by color.
 */
const ColorFilter: React.FC<ColorFilterProps> = ({
  colors,
  selectedColor,
  onColorChange,
  productCount,
}) => {
  return (
    <div className={styles.filterContainer}>
      <h1>Showing {productCount} results</h1>

      <div className={styles.innerFilterContainer}>
        <img src={filterIcon} alt="Filter icon" />
        <label className={styles.filterLabel}>Color</label>
        <select
          className={styles.filterSelect}
          value={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
        >
          <option value="">All</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ColorFilter;
