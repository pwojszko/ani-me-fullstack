import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
const cx = classNames.bind(styles);

export function HomePage() {
  return (
    <div className={cx("home-page", "grid__home-page")}>
      <main className={cx("home-page__main")}>
        <Hero />
        <Carousel path="seasons/now" title="Current season" />
        <Carousel path="top/anime" title="Top anime" />
      </main>
    </div>
  );
}
