import react, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
const cx = classNames.bind(styles);

const CarouselHandler = ({ elements }: any) => {
  const [scrollLeftValue, setScrollLeftValue] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [mousePosition, setMousePosition] = useState(0);
  const [prevMousePosition, setPrevMousePosition] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: react.SetStateAction<number> }) => {
      setMousePosition(e.clientX);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleOnMouseDown = () => {
    setPrevMousePosition(mousePosition);
    if (scrollRef.current) {
      setIsScrollActive(true);
      setScrollLeftValue(scrollRef.current.scrollLeft);
    }
  };

  const handleOnMouseLeave = () => {
    setIsScrollActive(false);
  };

  const handleOnMouseUp = () => {
    setIsScrollActive(false);
  };

  const handleOnMouseMove = () => {
    if (scrollRef.current && isScrollActive) {
      scrollRef.current.scrollLeft =
        scrollLeftValue + prevMousePosition - mousePosition;
    }
  };

  useEffect(() => {
    const allElementsInsideSlider = document.querySelectorAll(
      "[class*=carousel__list] *"
    );
    allElementsInsideSlider.forEach((element) => {
      element.setAttribute("draggable", "false");
    });
  }, [elements]);

  return (
    <div
      onMouseDown={handleOnMouseDown}
      onMouseLeave={handleOnMouseLeave}
      onMouseUp={handleOnMouseUp}
      onMouseMove={handleOnMouseMove}
      ref={scrollRef}
      className={cx("carousel__list")}
      style={{ overflow: "scroll hidden" }}
    >
      {elements}
    </div>
  );
};

export default CarouselHandler;
