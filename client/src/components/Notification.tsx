import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showNotification,
  setNotificationActivity,
} from "../store/notification/notification";
import { RootState } from "../store/store";

const Notification = () => {
  const dispatch = useDispatch();

  const message = useSelector((state: RootState) => state.notification.message);
  const isActive = useSelector(
    (state: RootState) => state.notification.isActive
  );

  useEffect(() => {
    dispatch(setNotificationActivity(true));

    const timer = setTimeout(() => {
      dispatch(setNotificationActivity(false));
      dispatch(showNotification(""));
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);

  if (typeof message !== "string" || !message) return null;
  return (
    <div
      className={
        isActive
          ? "notification grid__notification notification--active"
          : "notification grid__notification notification--inactive"
      }
    >
      <p className="notification__text">{message}</p>
    </div>
  );
};

export default Notification;
