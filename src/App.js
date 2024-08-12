import './App.css';
import { Link , Route , Routes } from 'react-router-dom';
import Desktop from "./Desktop/Desktop";
import ActiveSprint from './ActiveSprint/ActiveSprint';
import AdminPanel from './AdminPanel/AdminPanel';
import { FcHome } from "react-icons/fc";
import { FcStatistics } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { BsRocketTakeoff } from "react-icons/bs";


function App() {
  return (
    <div className="App">
      <div className='router-nav-container'>
        <nav className='navigation-menu'>
        <div className='rocket'>
        <BsRocketTakeoff size="3rem"/>
        <p className='rocket-text'>Teams in Space</p>
          </div>
          <div className='navigation-menu__container'>
            <div className='home'>
              <Link to="/desktop"> <FcHome /> Главная </Link>
            </div>
            <div>
              <Link to="/sprint"> <FcStatistics />  Активный спринт</Link>
            </div>
            <div>
              <Link to="/admin"> <FcBusinessman />  Панель администратора</Link>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/sprint" element={<ActiveSprint />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
