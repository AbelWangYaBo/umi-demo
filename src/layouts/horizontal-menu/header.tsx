import styles from './header.less';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles['logo-panel']}>
        <img
          src="https://sgsi2w2244.ap.merckgroup.com/MMIOMS/Images/MerckLogo.png"
          alt="Lateral Praxis (India) Pvt. Ltd."
        />
      </div>
      <div className={styles['user-details-panel']}>
        <div className={styles['left-sec']}>
          Merck Life Science Pvt. Limited
        </div>
        <div className={styles['center-sec']}></div>
        <div className={styles['right-sec']}></div>
      </div>
    </div>
  );
};

export default Header;
