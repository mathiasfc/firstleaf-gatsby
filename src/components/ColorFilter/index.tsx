import React from "react";
import filterIcon from "../../images/filter-icon.svg";
import * as styles from "./index.module.scss";

interface ColorFilterProps {
  colors: string[];
  selectedColor: string;
  onColorChange: (color: string) => void;
  productCount: number;
}

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
