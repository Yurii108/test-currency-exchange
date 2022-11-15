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
          <Route key={1} path="/" element={<Home />} />
          <Route key={2} path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
