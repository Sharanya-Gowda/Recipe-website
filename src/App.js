import React from "react";
//import About from "./pages/about/About"
import Approuter from "./router/Approuter"
import SaveRecipes from './components/SaveRecipes';

const App =() =>{
  return <div className="appWrapper">
    <SaveRecipes />  {/* Use the component */}

    <Approuter />
  </div>
}

export default App;