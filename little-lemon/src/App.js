import './App.css';
import Home from "./Components/Pages/HomePage/Home"
import { Routes, Route} from 'react-router-dom';
import Bookings from './Components/Pages/Bookings/Bookings';
import ConfirmBooking from './Components/Pages/Bookings/ConfirmBooking'
import UnderConstruction from './Components/UnderConstruction';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route 
            path="/confirm-booking"
            element={<ConfirmBooking />} 
          />
          <Route 
            path="/about"
            element={<UnderConstruction />} 
          />
          <Route 
            path="/menu"
            element={<UnderConstruction />} 
          />
          
          
          <Route 
            path="/order-online"
            element={<UnderConstruction />} 
          />
          <Route 
            path="/login"
            element={<UnderConstruction />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
