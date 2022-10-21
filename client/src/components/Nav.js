import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>'조은기'의 texty</div>
        <button>숨기기</button>
      </div>
      <div>
        <ul>
          <li>검색</li>
          <li>업데이트</li>
          <li>설정과 멤버</li>
        </ul>
      </div>
      <div>
        <div>공유된 페이지</div>
        <ul>
          <li>노션을 물리칠 로션!</li>
        </ul>
      </div>
      <div>
        <div>개인 페이지</div>
        <ul>
          <li>제목없음</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
