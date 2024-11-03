import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Reminder = () => {
  const { data } = useContext(GlobalContext);
  const month = data.filter(
    (data) => Number(data.date.substring(5, 7)) === new Date().getMonth() + 1
  );
  const today = month.filter(
    (data) => Number(data.date.substring(8, 10)) === new Date().getDate()
  );
  return (
    <div className="reminder-container">
      <div className="heading">Birthday Reminder</div>
      <div className="box">
        <div className="month">
          <div className="head">Birthdays this month...</div>
          <ul className="list-container">
            {month.length > 0 ? (
              month.map((data) => {
                return (
                  <li className="list-items-2" key={data.id}>
                    {data.name} <span>{data.date}</span>
                  </li>
                );
              })
            ) : (
              <div className="nodata">
                <p>No Birthday this month</p>
              </div>
            )}
          </ul>
        </div>
        <div className="today">
          <div className="head">Birthdays today...</div>
          <ul className="list-container">
            {today.length > 0 ? (
              today.map((data) => {
                return (
                  <li className="list-items-2" key={data.id}>
                    {data.name} <span>{data.date}</span>
                  </li>
                );
              })
            ) : (
              <div className="nodata">
                <p>No Birthday today</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
