//import logo from './logo.svg';
import './assets/css/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Home from './pages/Home';

import Specialty from './pages/Specialties';
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
          {/* <Route path='/about' exact>
              <About />
          </Route>
          <Route path='/contact' exact>
              <Contact />
          </Route>
          <Route path='/blog' exact>
              <Blog />
          </Route>
          <Route path='/blog/:id_post' exact>
              <Post />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
