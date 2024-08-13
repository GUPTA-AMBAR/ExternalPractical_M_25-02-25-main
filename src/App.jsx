import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Introduction from './Components/Introductionpage';
import ParticleBackground from './Components/background ';
import About from './Components/about';
import Education from './Components/education';
import Skills from './Components/skills';
import Contact from './Components/contact';
import Project from './Components/project';




function App() {
  const[selectedTab,setSelectedTab]=useState("Home");

  return (
    <div >
    <ParticleBackground ></ParticleBackground>
      
    <Introduction selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    {selectedTab==="Home"? (<About></About>) : selectedTab==='education'? (<Education></Education>):  selectedTab==='skills'?(<Skills></Skills>) :selectedTab==='project'?(<Project></Project>)  :selectedTab==='contact'?(<Contact></Contact>) :"" };

    </div>
  )
}


export default App;
