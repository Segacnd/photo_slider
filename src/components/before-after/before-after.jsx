import { useState } from "react";
import styles from "./before-after.module.css";

export const BeforeAfter = () => {
  const [width, setWidth] = useState(50);

  const widthChanger = (e) => {
    setWidth(e.target.value);
  };
  return (
    <div className={styles.wrapper} style={{ height: "500px" }}>
      <div className={styles.upperImageWrapper} style={{ right: `${width}%` }}>
        <img
          src="https://images.unsplash.com/photo-1553774651-905c1bc85a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="dengi"
        />
      </div>
      <input
        className={styles.range}
        type="range"
        min="0"
        max="100"
        step="1"
        value={width}
        onChange={widthChanger}
      />
      <div className={styles.lowerImage}>
        <img
          src="https://images.unsplash.com/photo-1553696590-4b3f68898333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="pomoika"
        />
      </div>
    </div>
  );
};
