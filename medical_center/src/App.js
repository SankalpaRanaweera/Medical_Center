import './App.css';
import Home from './pages/Home';
import Appoinment from './pages/Appoinment';
import{BrowserRouter as Router,Route,Switch, Routes}from'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
     <switch>
      <Routes exact path="/">
      <Home/>
      </Routes>
      <Routes path="/Appoinment">
        <Appoinment/>
        </Routes>
        </switch>
    </div>
    </Router>
  );
}


export default App;
