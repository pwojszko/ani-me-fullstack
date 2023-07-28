import Hero from "./Hero/Hero";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Row from "./Row/Row";

const cx = classNames.bind(styles);

export function HomePage() {
  return (
    <div className={cx("home-page", "grid__home-page")}>
      <main className={cx("main")}>
        <Hero />
        <Row path="seasons/now" title="Current season" />
        <Row path="top/anime" title="Top anime" />
      </main>
    </div>
  );
}
