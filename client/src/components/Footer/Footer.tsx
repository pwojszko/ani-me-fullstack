import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("footer", "grid__footer")}>
      <p className={cx("footer__copyright")}>
        ©Copyright by <strong>Piotr Wojszko</strong>
      </p>
    </footer>
  );
}

export default Footer;
