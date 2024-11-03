import Question from "./Question";
import React from "react";
import questions from "./data";
import Header from "./Header";
function App() {
  return (
    <div className="main-container" >
      <Header />
      <div className="list-container">
        {questions.map((qus) => {
          return <Question key={qus.id} {...qus} />
        })}
      </div>
    </div>
  );
}
export default App;
