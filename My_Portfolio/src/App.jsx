import About from "./components/About"
import Contact from "./components/Contact"
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
      <Projects/>
      
      <Contact/>

      <SocialLink/>
    </div>
  )
}

export default App
