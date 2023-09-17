import './App.css';
import Appoinment from './pages/Appoinment';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
     <switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/Appoinment">
        <Appoinment/>
        </Route>
        </switch>
      
    </div>
    </Router>
  );
}

export default App;
