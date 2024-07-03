import './App.css';
import Home from "./Components/Home"
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/bookings" element={<Bookings />} /> */}
          {/* <Route 
            path="/about"
            element={<UnderConstruction />} 
          />
          <Route 
            path="/menu"
            element={<UnderConstruction />} 
          />
          
          <Route 
            path="/confirmedbooking"
            element={<ConfirmedBooking />} 
          />
          <Route 
            path="/order-online"
            element={<UnderConstruction />} 
          />
          <Route 
            path="/login"
            element={<UnderConstruction />} 
          />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </div>
  );
}

export default App;
