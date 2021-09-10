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
import Footer from './components/Footer';

function App() {

  return (
    <div className="page-container">
      
      <Router>
        
        <div className="content-wrap">
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
        </div>
        <Footer/>
      </Router>
      
      </div>
  );
}

export default App;
