import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.wrap}>
        <div className={styles.headerLeft}>
          <div className={styles.logo}>texty</div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.share}>공유</div>
          <div className={styles.comment}>댓글</div>
          <div className={styles.more}>더보기</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
