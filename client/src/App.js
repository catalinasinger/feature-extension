import './App.css';
import logo from './Images/Logo.png'
import RecipesPage from '/Users/shauni/Desktop/codeop-mvp1/client/src/Components/RecipesPage.js'
import React from "react";


function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      {/*This is the outside border   */}
      <ul class="flex border-b"> 
        {/* this is the line underneath home */}
        <li class="-mb-px mr-1">
          <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Home</a>
        </li>
        {/* This is the home box */}

        <li class="mr-1">
          <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="./client/src/Components/RecipesPage.js">Recipes</a>
        </li>
        {/* This is the recipes box  */}
      </ul>

      <center>
        <img src={logo} width="200" height="100" alt="Logo" />
      </center>

      {/* <p className="text-3xl text-gray-700 font-bold mb-5">
        <center>Welcome</center>
      </p> */}

      {/* <p className="text-pink">
        <center>text text</center>
      </p> */}

      <RecipesPage />
    </div>
  );
}
export default App;