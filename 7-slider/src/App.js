import { useEffect, useState } from "react";
import people from "./data";
import Header from "./Header";
import Review from "./Review";


function App() {
  const [index, setIndex] = useState(0);
  const [person, SetPerson] = useState(people);
  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }
    if (index > people.length - 1) {
      setIndex(0);
    }

  }, [index, person])

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slide)
  }, [index])
  return (
    <div className="main-container">
      <Header />
      <Review person={people} index={index} setIndex={setIndex} />
    </div>
  );
}

export default App;
