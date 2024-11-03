import React, { useEffect } from "react";

const Alert = ({ alert, removeAlert }) => {
  console.log(alert);
  const { msg, type } = alert;
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(false, "", "");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return <div className={`alert ${type}`}>{msg.toUpperCase()}</div>;
};

export default Alert;
