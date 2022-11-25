import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer'
import Header from './components/Header/Header'
import { Projects } from './components/Projects/Projects'
import { SliderText } from './components/SliderText'
import './styles/global.css'
function App() {

  return (
    <>
      <div className="bg-black"> 
      <Header/>
      <Banner/>
      <Projects/>
      <SliderText/>
      <Footer/>
      </div>

    </>
    
  )
}

export default App
