import './App.css';
import NavigationSideBar from './NavigationSideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Mesocycles from '../pages/Mesocycles';
import PlanMeso from '../pages/Mesocycles';


function App() {
  return (
    <div >
      {/* <header className="Mesocycles-header">
        Mesocycles
      </header> */}
      <Router>
      <NavigationSideBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mesos" element={<Mesocycles />}/>
          <Route path="/plan-meso" element={<PlanMeso />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
