import React from "react";
import styles from "../page.module.css";
interface Props {
  clickCount: number;
}
const Result = ({ clickCount }: Props) => {
  return (
    <div className={styles.result_container}>
      <h3>Result</h3>
      <p>your final score is {clickCount}</p>
    </div>
  );
};

export default Result;
