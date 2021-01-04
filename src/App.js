//import logo from './logo.svg';
import './assets/css/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Footer from './components/footer';
import Home from './pages/Home';
import Specialty from './pages/Specialties';
import Blog from './pages/Bloger';
import ItemSpecialty from './pages/Specialties/components/desplaySpecialty';
import SinglePost from './pages/Bloger/singlPost';
import DataProvider from './dataContext';
import ScrolTop from './scrollTop';
function App() {


  return (
    <Router>
      <DataProvider>
        <div className="App relative "  >
          <ScrolTop />
          <Nav />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/specialties' exact>
              <Specialty />
            </Route>
            <Route path='/blog' exact component={Blog} />

            <Route path='/blog/:id' exact component={SinglePost} />
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
      </DataProvider>
    </Router>
  );
}

export default App;
