import NaviBar from './Components/NaviBar';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home';
import About from './About';

// import { Button } from 'react-bootstrap';
function App() {
  return (
    <>
      <BrowserRouter>
      <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
