
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Navbar from './Navbar';
import About from './routes/About';

function App() {
  return (
    <>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
    </>
   
  );
}

export default App;
