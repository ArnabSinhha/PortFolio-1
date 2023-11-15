import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from './Components/Skill/skills';
import Work from "./Components/Work/work";
import Client from './Components/Client/client'
import Contact from "./Components/Contact/contact";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Work/>
     <Client/>
     <Contact/>
     
    </div>
  );
}

export default App;
