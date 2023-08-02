import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <div className={styles.menuWrapper}>
      <a className={styles.link} href="#" target="_blank">
        home
      </a>
      <a className={styles.link} href="#" target="_blank">
        products
      </a>
      <a className={styles.link} href="#" target="_blank">
        about
      </a>
    </div>
  );
};
