import { Banner } from './components/Banner/Banner'
import Header from './components/Header/Header'
import { Projects } from './components/Projects/Projects'
import './styles/global.css'
function App() {

  return (
    <>
      <div className="bg-black"> 
      <Header/>
      <Banner/>
      <Projects/>
      </div>

    </>
    
  )
}

export default App
