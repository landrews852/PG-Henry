import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Nav from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Nav />}/> */}
          {/* <Route exact path="/" element={<LandingPage />} /> */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/home/:id" element={<Detail />} /> */}
          {/* <Route path="/home/about" element={<AboutUs />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
