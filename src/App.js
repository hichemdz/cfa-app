//import logo from './logo.svg';
import './assets/css/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Footer from './components/footer';
import Home from './pages/Home';
import Specialty from './pages/Specialties';
import ItemSpecialty from './pages/Specialties/components/desplaySpecialty';
function App() {
  return (
    <Router>
      <div className="App relative">
        <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/specialties' exact>
            <Specialty />
          </Route>

          <Route path='/specialties/:id' exact component={ItemSpecialty} />

          {/* <Route path='/about' exact>
              <About />
          </Route>
          <Route path='/contact' exact>
              <Contact />
          </Route>
          <Route path='/blog' exact>
              <Blog />
          </Route>
           */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
