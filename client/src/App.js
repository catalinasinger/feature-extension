import './App.css';
import logo from './Images/Logo.png'
import RecipesPage from './Pages/RecipesPage';
import HomePage from './Pages/HomePage';
import React from "react";
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
  
    <div className="container mx-auto bg-gray-200 rounded-xl shadow-md border p-8 m-10">
      {/*This is the outside border   */}

<Navbar />
      <center>
        <img src={logo} width="200" height="100" alt="Logo" />
      </center>

      <Routes>
        <Route path='/RecipesPage' element={<RecipesPage/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
      </Routes>
    </div>

  );
}
export default App;
