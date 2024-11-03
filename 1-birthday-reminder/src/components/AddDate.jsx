import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddDate = () => {
  const { data, AddDate } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getMilliseconds();
    console.log(typeof new Date().getMonth());
    if (!name || !date) {
      alert("please enter name and date");
    } else if (name.length > 12) {
      alert("length of name should be less than 12 letters");
    } else {
      const obj = {
        name: name,
        date: date,
        id: id,
      };
      AddDate(obj);
      setName("");
      setDate("");
    }
  };
  return (
    <div className="main-form-container">
      <div className="heading">Add New Birthday Dates</div>
      <form className="form-container">
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="date">
            Date
          </label>
          <input
            className="form-input"
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button type="submit" onClick={handleSubmit} className="btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDate;
