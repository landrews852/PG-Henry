import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import Signin from './components/signin/Signin';
import Products from './components/Category/Products';
// import NavBar from './components/NavBar/NavBar.jsx';
/* import NavBar from './components/navbar/NavBar'; */


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/productos" element={<Products />} />
          {/* <Route exact path="/" element={<LandingPage />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/home/:id" element={<Detail />} /> */}
          {/* <Route path="/home/about" element={<AboutUs />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
