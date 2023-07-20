import React from "react";
import classNames from "classnames/bind";
import styles from "./SlidingButton.module.scss";
const cx = classNames.bind(styles);

interface SlidingButtonInterface {
  buttonClass?: string;
  firstText?: string;
  secondText?: string;
  icon?: any;
  onClick?: () => void;
}

const SlidingButton = ({
  buttonClass,
  firstText,
  secondText,
  icon,
  onClick,
}: SlidingButtonInterface) => {
  const buttonClassName = cx(
    { [`${buttonClass}`]: buttonClass },
    "button",
    "sliding-button"
  );

  const titleClass = cx(
    { [`${buttonClass}__title`]: buttonClass },
    "sliding-button__title"
  );

  const subtitleClass = cx(
    { [`${buttonClass}__subtitle`]: buttonClass },
    "sliding-button__subtitle"
  );

  return (
    <button onClick={onClick} className={buttonClassName}>
      <span className={titleClass}>{icon || firstText}</span>
      <span className={subtitleClass}>{secondText}</span>
    </button>
  );
};

export default SlidingButton;
