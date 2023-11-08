import AnimCursor from './components/AnimCursor'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer'
import Header from './components/Header/Header'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills'
import { SliderText } from './components/SliderText'
import ReactGA from 'react-ga'
import './styles/global.css'




function App() {

  

  return (
    <>
      <div className="dark:bg-black scroll-smooth"> 
      <AnimCursor/>
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <SliderText/>
      <Footer/>
      </div>

    </>
    
  )
}

export default App
