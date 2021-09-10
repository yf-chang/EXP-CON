import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import Navbar from './components/Navbar';
import PaymentPage from './pages/PaymentPage';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>

          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route exact path="/about">
            <AboutPage/>
          </Route>

          <Route exact path="/pricing">
            <PricingPage/>
          </Route>

          <Route exact path="/payment">
            <PaymentPage/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
