import Home from "./components/Home";
import Model from "./components/Model";
import Sidebar from "./components/Sidebar";
import ContextProvider from "./context";

function App() {
  return (
    <div className="main-container">
      <ContextProvider>
        <Home />
        <Sidebar />
        <Model />
      </ContextProvider>
    </div>
  );
}

export default App;
