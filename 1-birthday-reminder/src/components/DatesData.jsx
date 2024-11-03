import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const DatesData = () => {
  //   const context = useContext(GlobalContext);
  const { data, DeleteDate } = useContext(GlobalContext);
  console.log(data);
  //   console.log(context);

  return (
    <div className="datesData">
      <div className="heading">All Birthday Dates</div>
      <ul className="list-container special">
        {data.length > 0 ? (
          data.map((data) => {
            return (
              <li key={data.id} className="list-items">
                <span className="span">{data.name} </span>
                <span className="span">{data.date}</span>{" "}
                <button
                  className="delete-btn"
                  onClick={() => DeleteDate(data.id)}
                >
                  <img src="./images/delete-btn-1.png" alt="delete" />
                </button>
              </li>
            );
          })
        ) : (
          <div className="nodata">
            <p>PLEASE ENTER BIRTHDAY DATES</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default DatesData;
