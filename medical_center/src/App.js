import './App.css';
import Nbar from './components/Nbar';
import Home from './pages/Home';
import Appoinment from './pages/Appoinment';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import About from './pages/About';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    
    <>
    <Nbar />
    
   <Routes>
    
    <Route path="/Home" element={<Home />}></Route>
    <Route path="/Appoinment" element={<Appoinment />}></Route>
    <Route path="/Doctors" element={<Doctors />}></Route>
    <Route path="/Services" element={<Services/>}></Route>
    <Route path="/About" element={<About />}></Route>
    </Routes>
    
    </>
   
  );
  }


export default App;
