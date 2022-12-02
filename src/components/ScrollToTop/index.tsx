import React, { useEffect, useState } from 'react'
import {BiUpArrow} from'react-icons/bi'
import {Container} from './styles'


export const ScrollToTop = () => {

  const [showButton, setShowButtom] = useState(false) 

  useEffect(() => {

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 300){
            setShowButtom(true)
            // document.documentElement.classList.add("toInfinityAndBeyond")
        }else{
            setShowButtom(false)
        }
    })

  }, [])

  const ScrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })

  }

  return (
    <>
    
            
        <Container onClick={ScrollToTop}  show={showButton}>       
            <button> <BiUpArrow/></button>           
        </Container>

        {/* <Container onClick={ScrollToTop}  show={showButton} className={showButton ? "" : "toInfinityAndBeyond"}>       
            <button> topo</button>
        </Container> */}
    
      

    </>    
  )

}
