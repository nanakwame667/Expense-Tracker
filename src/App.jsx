import "./styles.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transactionlist from "./components/Transactionlist";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Header title={"Expense Tracker"} />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <Transactionlist />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
