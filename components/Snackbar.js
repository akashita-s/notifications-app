import React, { useState } from "react";
import styles from "./Snackbar.module.css";

const Snackbar = (props) => {
  return (
    <div
      className={styles.snackbar}
      style={{
        backgroundColor: props.color,
        top: props.top,
        color: "black",
      }}
    >
      <div className={styles.message}>{props.message}</div>
      <div className={styles.symbol}>
        <h1 style={{ cursor: "pointer" }} onClick={props.onClick}>
          &#10006;
        </h1>
      </div>
    </div>
  );
};

export default Snackbar;
