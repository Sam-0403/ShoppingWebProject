import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Components
import NavBar from "./components/NavBar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
// import UnknownAlert from "./components/UnknownAlert";

//Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import SignupScreen from "./screens/SignupScreen";
import ConfirmScreen from "./screens/ConfirmScreen";
import VerificationScreen from "./screens/VerificationScreen";

//Hooks
import useToggleState from "./hooks/useToggleState";

function App() {

  const [sideToggle, setSideToggle] = useToggleState(false);

  return (
    <Router>
      <NavBar click={setSideToggle}/>
      <BackDrop show={sideToggle} click={setSideToggle}/>
      <SideDrawer show={sideToggle} click={setSideToggle}/>

      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/signup" component={SignupScreen}/>
          <Route exact path="/verification" component={VerificationScreen}/>
          <Route exact path="/confirm/:confirmationCode" component={ConfirmScreen}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
