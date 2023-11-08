import React from 'react'
import DarkMode from '../DarkMode';
import { useTheme } from '../Hooks/useTheme';

import logoImg from '../../assets/logo-helioalves.svg';
import logoImgBlack from '../../assets/logo-helioalves-black.svg';

import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

import {Container,WrapperFooter, InforContacts} from './styles'
import {ScrollToTop} from '../ScrollToTop'


export const Footer = () => {

  const [theme, setTheme] = useTheme()

  return (
    <Container className="container" id="contact">


        <h1 className="text-gray-black dark:text-white text-center font-bold pb-10 text-small">VAMOS <br/>CONVERSAR?</h1>
        <h2 className="text-gray-black dark:text-white text-center text-3xl font-bold">Get in touch.</h2>
        <p className="text-gray-black dark:text-white text-center text-xs">
          Entre em contato através de uma das minhas redes sociais, e-mail ou WhatsApp.
        </p>
        <WrapperFooter className="pt-10">
            <InforContacts>
                <RiLinkedinFill size={40} className="text-black dark:text-white"/>
                <a href="https://linkedin.com/in/helioalves1" target="_blank">
                  <h6 className="font-bold text-black dark:text-white">Linkedin<br/>
                    Meu Perfil
                </h6>
                </a>
            </InforContacts>

            <InforContacts>
                <BsWhatsapp size={30} className="text-black dark:text-white"/>
                <a href="https://bit.ly/contatohelioalves" target="_blank">
                  <h6 className="font-bold text-black dark:text-white">WhatsApp<br/>
                    (73) 9 9914-0522
                  </h6>
                </a>
            </InforContacts>

            <InforContacts>
                <HiOutlineMail size={35} className="text-black dark:text-white"/>
                <a href="mailto:helioalves.dev@gmail.com" target="_blank">
                  <h6 className="font-bold text-black dark:text-white">E-mail<br/>
                    helioalves.dev@gmail.com
                  </h6>
                </a>
            </InforContacts>
        </WrapperFooter>

        <div className="flex justify-center pt-10 pb-10 logo">
          {theme === "light" ? (
              <img src={logoImgBlack} alt="Logo"/>
            ):(
              <img src={logoImg} alt="Logo"/>
          )}
        </div>

        <div className="justify-center flex  icon-git text-black dark:text-white">
          <a href="https://github.com/elius-w" target="_blank">
            <AiFillGithub size={40}/>
          </a>
        </div>

        <ScrollToTop/>
        <DarkMode/>

    </Container>
  )
}
