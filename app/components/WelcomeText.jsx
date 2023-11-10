import React from "react";
import styles from "../page.module.css";
const WelcomeText = () => {
  return (
    <div className={styles.welcome_container}>
      <h1>Welcome to the Click Counter Game!</h1>
      <p>
        Dive into the world of endless clicking with our Ultimate Click Counter
        Game!
      </p>
      <ul>
        <li> Its simple, fun, and strangely addictive.</li>
        <li>The Challenge: How fast can you click?</li>
        <li>The Goal: Click as many times as you can.</li>
      </ul>
    </div>
  );
};

export default WelcomeText;
