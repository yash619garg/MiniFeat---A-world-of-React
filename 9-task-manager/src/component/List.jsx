import React from "react";
import { FiEdit } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";

const List = ({ list, removeTask, editTask }) => {
  console.log(list);
  return (
    <div className="list-container">
      {list.map((task) => {
        const { id, title } = task;
        return (
          <div key={id} className="single-task">
            <p>{title}</p>
            <div className="btn-container">
              <button
                className="btn2 edit"
                onClick={() => {
                  editTask(id, title);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="btn2 delete"
                onClick={() => {
                  removeTask(id);
                }}
              >
                <FiDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
