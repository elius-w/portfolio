import React from 'react'
import logoImg from '../../assets/react.svg';

import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

import {Container,WrapperFooter, InforContacts} from './styles'

export const Footer = () => {
  return (
    <Container>

        <a href="" className="flex justify-center pt-5 pb-10"><img src={logoImg} alt="Logo"/></a>

        <h2 className="text-white text-center text-3xl font-bold">Get in touch.</h2>
        <p className="text-gray-200 text-center text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <WrapperFooter className="pt-10">
            <InforContacts>
                <RiLinkedinFill size={40}/>
                <h6 className="font-bold">Linkedin<br/>
                Meu Perfil</h6>
            </InforContacts>

            <InforContacts>
                <BsWhatsapp size={30}/>
                <h6 className="font-bold">WhatsApp<br/>
                <a href="#">(73) 9 9914-0522</a></h6>
            </InforContacts>

            <InforContacts>
                <HiOutlineMail size={35}/>
                <h6 className="font-bold">E-mail<br/>
                <a href="#">helioalves.dev@gmail.com</a></h6>
            </InforContacts>
        </WrapperFooter>
        <div className="justify-center flex pt-20 icon-git"><a href="#"><AiFillGithub size={40}/></a></div>
    </Container>
  )
}
