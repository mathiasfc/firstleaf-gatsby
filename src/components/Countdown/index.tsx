import React, { useState, useEffect } from "react";
import * as styles from "./index.module.scss";

type CountdownProps = {
  /** Total seconds for the countdown. */
  seconds: number;

  /** Optional label displayed above the timer. */
  label?: string;

  /** Whether the countdown should restart after reaching 0. */
  loop?: boolean;

  /** Additional CSS class for custom styles. */
  customClass?: string;

  /** Callback when the countdown finishes. */
  onFinish?: () => void;
};

const Countdown: React.FC<CountdownProps> = ({
  seconds: initialSeconds,
  label = "Reserving your wines for",
  loop = false,
  customClass = "",
  onFinish = null,
}) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        const end = loop ? initialSeconds : 0;
        return prevSeconds > 0 ? prevSeconds - 1 : end;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialSeconds, loop]);

  useEffect(() => {
    if (seconds === 0 && onFinish) {
      onFinish();
    }
  }, [seconds, onFinish]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");
  const counter = `00:${minutes}:${remainingSeconds}`;

  return (
    <div className={`${styles.countdown} ${customClass}`}>
      {label && (
        <div className={`${styles.label} countdown-label`}>{label}</div>
      )}
      <div className={`${styles.counter} countdown-counter`}>{counter}</div>
    </div>
  );
};

export default Countdown;
