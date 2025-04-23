import React, {useState, useEffect} from 'react'
import {Link} from'react-scroll'
import { useTheme } from '../Hooks/useTheme';
import {clsx} from 'clsx';

import logoImg from '../../assets/logo-helioalves-w.svg';
import logoImgBlack from '../../assets/logo-helioalves-b.svg';
import {MdClose, MdMenu} from 'react-icons/md'
// import iconLinkedin  from '../../assets/icon-linkedin.svg' ;   
import {FaLinkedinIn}  from 'react-icons/fa' ;   
import {BsWhatsapp}  from 'react-icons/bs' ;   
import {BsGithub}  from 'react-icons/bs' ;   
import iconWhatsApp  from '../../assets/icon-whats.svg' ;   
import iconGit  from '../../assets/icon-git.svg' ; 
 
import {Container, InnerHeader,MainLinks, Menu, SocialIcons, Logo, ToggleMenu, Overlay} from './styles'

export const Header = () => {

  const [theme, setTheme] = useTheme()
  console.log(theme)

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
  <Container className={clsx(' bg-white dark:bg-black bg-hide' , scrolled ? "scrolled" : "")} show={scrolled} id="topo" >
     
        <InnerHeader show={scrolled}>

          <ToggleMenu onClick={handleToggleMenu}>
            {toggleMenuIsOpened ? <MdClose className="closeColor"/> : <MdMenu className="text-black dark:text-white"/>}
          </ToggleMenu>   

          <Logo show={scrolled}>
            <Link to="banner" spy={true} smooth={true} offset={-100} duration={500} >
              {theme === "light" ? (
                <img src={logoImgBlack} alt="Logo"/>
              ):(
                <img src={logoImg} alt="Logo"/>
              )}
              
            </Link>
          </Logo>     

          <MainLinks>
          <Overlay menuIsOpen={toggleMenuIsOpened} onClick={handleToggleMenu}>

            <Menu menuIsOpen={toggleMenuIsOpened} className="bg-white dark:bg-gray-500 teste">

              <ul>
                  <li><Link to="banner" spy={true} smooth={true} offset={-100} duration={500}  className="text-gray-500 dark:text-white">Home</Link></li>             
                  <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500}  className="text-gray-500 dark:text-white">Skills</Link></li>
                  <li><Link to="projects" spy={true} smooth={true} offset={-40} duration={500} className="text-gray-500 dark:text-white">Projects</Link></li>
                  <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="text-gray-500 dark:text-white">Connect</Link></li>
              </ul> 

              <div className="InfoMob">
                <span className="text-gray-500 dark:text-white">
                 <p>helioalves.dev@gmail.com</p> 
                 <b>(73)  9 9914-0522</b>
                </span>  
                <a href="https://linkedin.com/in/helioalves1" target="_blank"><FaLinkedinIn className="text-gray-500 dark:text-white"/></a>
                <a href="https://bit.ly/contatohelioalves" target="_blank"><BsWhatsapp className="text-gray-500 dark:text-white"/></a>
                <a href="https://github.com/elius-w" target="_blank"><BsGithub className="text-gray-500 dark:text-white"/></a>
              </div>   

            </Menu>
            </Overlay>

            <SocialIcons>
              <a href="https://linkedin.com/in/helioalves1" target="_blank"><FaLinkedinIn className="text-gray-500 dark:text-white"/></a>
              <a href="https://bit.ly/contatohelioalves" target="_blank"><BsWhatsapp className="text-gray-500 dark:text-white"/></a>
              <a href="https://github.com/elius-w" target="_blank"><BsGithub className="text-gray-500 dark:text-white"/></a>          
            </SocialIcons>
          </MainLinks>
        

        </InnerHeader>

  
    </Container>
  )
}

export default Header