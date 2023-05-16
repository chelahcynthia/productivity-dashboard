import "./App.css";

// import all the components here
import Sidebar from "./Components/Sidebar/Sidebar";
import Body from "./Components/Body/Body";
import Account from "./Components/Accounts/Account"

function App() {
  return <div className="container">
  <Sidebar />
  <Body />
  <Account />

    </div>;
}

export default App;
