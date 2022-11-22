import React, {useState, useEffect} from 'react'
import logoImg from '../../assets/react.svg';
import {MdClose, MdMenu} from 'react-icons/md' 


import iconLinkedin  from '../../assets/icon-linkedin.svg' ;   
import iconWhatsApp  from '../../assets/icon-whats.svg' ;   
import iconGit  from '../../assets/icon-git.svg' ; 
 
import {Container, InnerHeader,MainLinks, Menu, SocialIcons, Logo, ToggleMenu, Overlay} from './styles'

export const Header = () => {

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened)
  }


  const [scrolled, setScrolled] = useState(false)
  useEffect(() =>{
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }   
    
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)

  },[])

  return (
    <Container className={scrolled ? "scrolled" : ""} show={scrolled}>
     
        <InnerHeader show={scrolled}>

          <ToggleMenu onClick={handleToggleMenu}>
            {toggleMenuIsOpened ? <MdClose className="closeColor"/> : <MdMenu/>}
          </ToggleMenu>   

          <Logo show={scrolled}>
            <a href="" ><img src={logoImg} alt="Logo"/></a>
          </Logo>     

          <MainLinks>
          <Overlay menuIsOpen={toggleMenuIsOpened} onClick={handleToggleMenu}>

            <Menu menuIsOpen={toggleMenuIsOpened}>

              <ul>
                  <li><a href="#">Home</a></li>             
                  <li><a href="#">Skills</a></li>
                  <li><a href="#">Projects</a></li>
              </ul>          

            </Menu>
            </Overlay>

            <SocialIcons>
              <a href="" ><img src={iconLinkedin} alt="Logo"/></a>
              <a href=""><img src={iconWhatsApp} alt="Logo"/></a>
              <a href=""><img src={iconGit} alt="Logo"/></a>
          
            </SocialIcons>
          </MainLinks>
        

        </InnerHeader>

  
    </Container>
  )
}

export default Header