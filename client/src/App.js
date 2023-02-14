import './App.css';
import logo from './Images/Logo.png'
import RecipesPage from './Pages/RecipesPage';
import HomePage from './Pages/HomePage';
import { useState } from "react";
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';


function App() {
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    const query = event.target.value;
    setQuery(query);
  };

  return (
  
    <div className="container mx-auto bg-gray-200 rounded-xl shadow-md border p-8 m-10">
      {/*This is the outside border   */}
      
      <Navbar onChange={handleChange}/>

      <center>
        <img src={logo} width="200" height="100" alt="Logo" />
      </center>

      <Routes>
        <Route path='/Home' element={<HomePage query={query}/>}/>
        <Route path='/Recipes' element={<RecipesPage query={query}/>}/>
      </Routes>
    </div>

  );
}
export default App;
