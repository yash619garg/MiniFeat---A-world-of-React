import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTour] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteTour = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id !== id
    })

    setTour(newTour);

  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTour(data);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return <Loading />
  }
  if (tours.length === 0) {
    return (
      <div className="loading-container no-tour">
        <h2>No Tours Left</h2>
        <button className="delete-btn special" onClick={fetchData}>Refresh</button>
      </div>
    )
  }
  return (
    <Tours tours={tours} deleteTour={deleteTour} />
  );
}

export default App;
