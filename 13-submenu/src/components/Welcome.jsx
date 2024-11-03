import React, { useEffect, useRef } from "react";
import { useCustomContext } from "../context";

const Welcome = () => {
  const welcome = useRef(null);
  const { isWelcomeOpen, welcomeLocation } = useCustomContext();
  const { center, bottom } = welcomeLocation;
  useEffect(() => {
    const msg = welcome.current;
    msg.style.left = `${center - 25}px`;
    msg.style.top = `${bottom - 10}px`;
  });

  return (
    <div className={`welcome-msg ${isWelcomeOpen && "show"}`} ref={welcome}>
      😜
    </div>
  );
};

export default Welcome;
