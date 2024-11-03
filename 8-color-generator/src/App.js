import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
// import Error from "./components/Error";
import Colors from "./components/Colors";
import Values from "values.js";

function App() {
  const [color, setColor] = useState([]);
  const [List, setList] = useState(new Values("rgb(167, 231, 206)").all(10));
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMsg("")
    }, 1000)
    return () => clearTimeout(timeout);
  }, [msg])
  return (
    <div className="main-container">
      <Header />
      <Form color={color} setColor={setColor} setList={setList} setMsg={setMsg} />
      {msg && <div className="msg-box">
        {msg}
      </div>}

      <Colors list={List} setMsg={setMsg} />
    </div>
  );
}

export default App;
