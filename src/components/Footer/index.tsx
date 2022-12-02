import React from 'react'
import logoImg from '../../assets/logo-helioalves.svg';

import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

import {Container,WrapperFooter, InforContacts} from './styles'
import {ScrollToTop} from '../ScrollToTop'

export const Footer = () => {
  return (
    <Container className="container" id="contact">


        <h1 className="text-white text-center font-bold pb-10 text-small">VAMOS <br/>CONVERSAR?</h1>
        <h2 className="text-white text-center text-3xl font-bold">Get in touch.</h2>
        <p className="text-gray-200 text-center text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <WrapperFooter className="pt-10">
            <InforContacts>
                <RiLinkedinFill size={40}/>
                <a href="www.linkedin.com/in/helioalves1" target="_blank"><h6 className="font-bold">Linkedin<br/>
                Meu Perfil</h6></a>
            </InforContacts>

            <InforContacts>
                <BsWhatsapp size={30}/>
                <a href="https://bit.ly/contatohelioalves" target="_blank"><h6 className="font-bold">WhatsApp<br/>
                (73) 9 9914-0522</h6></a>
            </InforContacts>

            <InforContacts>
                <HiOutlineMail size={35}/>
                <a href="mailto:helioalves.dev@gmail.com" target="_blank"><h6 className="font-bold">E-mail<br/>
                helioalves.dev@gmail.com</h6></a>
            </InforContacts>
        </WrapperFooter>

        <div className="flex justify-center pt-10 pb-10 logo"> <img src={logoImg} alt="Logo"/></div>

        <div className="justify-center flex  icon-git"><a href="https://github.com/elius-w" target="_blank"><AiFillGithub size={40}/></a></div>

        <ScrollToTop/>

    </Container>
  )
}
