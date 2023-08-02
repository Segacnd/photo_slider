import { useState } from 'react';
import { Menu } from '../menu/menu';
import styles from './show-hide.module.css'


export const ShowHide = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
  
    const clickHandler = () => {
      setIsMenuVisible((prev) => !prev);
  
    };


    return (
        <div className={styles.wrapper}>
        <button onClick={clickHandler}>Click Me</button>
        <div
          className={styles.listWrapper}
          style={{ height: isMenuVisible ? "400px" : 0 }}
        >
          <h2 className={styles.listWrapper}>text  here</h2>

        </div>
      </div>
    )
}