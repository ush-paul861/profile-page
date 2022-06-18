import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Profile from './profile';
import Form from './form';
// import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/profile" element={<Profile/>}/>
      {/* <Route path="/"element ={Footer}/> */}
    </Routes>
</BrowserRouter>
  </>
  );
}

export default App;
