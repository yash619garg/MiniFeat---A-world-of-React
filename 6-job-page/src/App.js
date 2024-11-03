import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { FcNext } from "react-icons/fc";
import Header from "./components/Header";

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJob] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setJob(data);
      console.log(jobs);

    } catch (error) {
      setLoading(false)
      console.log(error);
    }

  }
  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return <Loading />
  }
  const { id, title, dates, duties, company } = jobs[value];
  return (
    <div className="main-container">
      <Header />
      <div className="main-box">
        <div className="button-container">
          {jobs.map((job, index) => {
            return (
              <button key={job.id} className="btn" onClick={() => { setValue(index) }}> {job.company}</button>
            )
          })}
        </div>
        <div className="job-container">
          <div className="upper-container">
            <p className="title">{title}</p>
            <div className="company">{company}</div>
            <p className="dates">{dates}</p>
          </div>

          {duties.map((work, index) => {
            return (
              <div key={index} className="duty">
                <span className="bag-icon">{
                  <FcNext />}</span>
                <div className="work">{work}</div>
              </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
