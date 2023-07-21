import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
import { useRef, useState } from "react";
import React from "react";

const cx = classNames.bind(styles);

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [srollProgress, setSrollProgress] = useState<number>(0);

  const handleScroll = (toRight: boolean) => {
    if (ref.current) {
      const { scrollLeft, offsetWidth, scrollWidth, clientWidth } = ref.current;

      const scrollToPosition =
        scrollLeft + (toRight ? offsetWidth : -offsetWidth);
      const maxPosition = scrollWidth - clientWidth;
      const scrollProgress = (scrollToPosition / maxPosition) * 100;

      ref.current?.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
      setSrollProgress(scrollProgress);
    }
  };

  return (
    <section className={cx("carousel")}>
      <button
        className={cx("button", "left", { disabled: srollProgress <= 0 })}
        onClick={() => handleScroll(false)}
        aria-label="scroll left"
      >
        {"<"}
      </button>

      <button
        className={cx("button", "right", { disabled: srollProgress >= 100 })}
        onClick={() => handleScroll(true)}
        aria-label="scroll right"
      >
        {">"}
      </button>

      <div className={cx("list")} ref={ref}>
        {React.Children.toArray(children).map((child, index) => (
          <div key={index} className={cx("item")}>
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
