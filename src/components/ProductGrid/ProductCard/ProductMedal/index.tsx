import React, { Fragment } from "react";
import * as styles from "./index.module.scss";

enum MedalType {
  GOLD = "gold-medal",
  SILVER = "silver-medal",
  MEDAL_90 = "90-points",
}

const medalImages: { [key in MedalType]: string } = {
  [MedalType.GOLD]:
    "https://www.firstleaf.com/static/Medal%20Gold-3dbe84cc220a167292ddbae9211f7ef2.svg",
  [MedalType.SILVER]:
    "https://www.firstleaf.com/static/Medal%20Silver-11299430508fa1bb30744f657a2ce93d.svg",
  [MedalType.MEDAL_90]:
    "https://www.firstleaf.com/static/90%20points-182a7b8c6e1520e4fd4d4a45e8d83dd7.svg",
};

type ProductMedalProps = {
  award_highlights?: {
    [key in MedalType]?: number;
  };
};

/**
 * A component that renders medals for a product based on its award highlights.
 *
 * @returns A JSX element displaying the product medals or a placeholder if no medals are present.
 */

const ProductMedal: React.FC<ProductMedalProps> = ({ award_highlights }) => {
  const hasMedals =
    award_highlights &&
    Object.values(award_highlights).some((count) => count > 0);

  return (
    <div className={styles.medalRow}>
      {hasMedals ? (
        // Each key is a medal type and the value is the count of that medal type.
        Object.entries(award_highlights).map(([medal, count]) => {
          const medalType = medal as MedalType;
          return (
            <Fragment key={medal}>
              {/* Render the corresponding medal for the given count */}
              {Array.from({ length: count }).map((_, index) => (
                <img
                  key={`${medalType}-${index}`}
                  className={styles.medal}
                  src={medalImages[medalType]}
                  alt={medalType}
                />
              ))}
            </Fragment>
          );
        })
      ) : (
        // Render a placeholder to reserve height if no medals are available
        <div className={styles.placeholder}></div>
      )}
    </div>
  );
};

export default ProductMedal;
