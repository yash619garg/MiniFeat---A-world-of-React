import AddDate from "./components/AddDate";
import DatesData from "./components/DatesData";
import Reminder from "./components/Reminder";
import Header from "./components/header";
import ContextProvider from "./context/GlobalContext";


function App() {
  return (
    <div className="body-container">
      <Header />
      <div className="main-container">
        <ContextProvider >
          <DatesData />
          <AddDate />
          <Reminder />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
