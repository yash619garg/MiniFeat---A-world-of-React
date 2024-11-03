import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseIncome from "./components/ExpenseIncome";
import TransitionList from "./components/TransitionList";
import { GlobalProvider } from "./context/GloabalContext";
import Addexpense from "./components/Addexpense";
function App() {
  return (
    <div className="main-container">
      <Header />
      <GlobalProvider >
        <div className="container">
          <div className="amount-container">
            <Balance />
            <ExpenseIncome />
          </div>
          <TransitionList />
          <Addexpense />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
