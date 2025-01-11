import About from "./components/About"
import Bitcoin from "./components/Bitcoin"
import Navbar from "./components/Navbar"
import Sentiment from "./components/Sentiment"
import Team from "./components/Team"
import Tokenomics from "./components/Tokenomics"
import Performance from "./components/Performance"
import GetStarted from "./components/GetStarted"
import TrendingCoins from "./components/TrendingCoins"
import Youmayalsolike from "./components/Youmayalsolike"


function App() {

  return (
    <div className="bg-gray-200">
    
    <Navbar />
    <Bitcoin/>
    <Performance/>
    <Sentiment />
    <About />
    <Tokenomics/>
    <Team/>
    <Youmayalsolike/>
    <GetStarted/>
    <TrendingCoins/>
    </div>
  )
}

export default App
