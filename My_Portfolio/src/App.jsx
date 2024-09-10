import About from "./components/About"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import SocialLink from "./components/SocialLink"

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Achievements/>
      <Projects/>
      
      <Contact/>

      <SocialLink/>
    </div>
  )
}

export default App
