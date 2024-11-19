import React from "react";
import * as styles from "./index.module.scss";

type EmptyStateProps = {
  message: string;
};

/**
 * The `EmptyState` component is displayed when there are no products or results to show.
 * It renders a message and a friendly icon to inform the user about the empty state.
 * Optionally, it suggests the user try a different filter or check back later.
 */
const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className={styles.emptyStateContainer}>
      <div className={styles.emptyStateIcon}> 🔍</div>
      <h2 className={styles.emptyStateMessage}>{message}</h2>
      <p className={styles.emptyStateText}>
        Please try a different filter or check back later.
      </p>
    </div>
  );
};

export default EmptyState;
