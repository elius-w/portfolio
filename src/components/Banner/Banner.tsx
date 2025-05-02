import React,{useState} from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {BiCloudDownload} from 'react-icons/bi'
import {Container, About, Photo, SliderText} from './styles'

import fotoAbout from '../../assets/foto.gif';
import curriculo from '../../assets/Curriculo-Helio-Alves.pdf';

export const Banner = () => {

  return (
    <Container id="banner">
      <SliderText>
        <ul>
            <li>Front-End Developer</li>
            <li>|</li>
            <li>UI/UX Design</li>
            <li>|</li>
  
        </ul>
      </SliderText>
      <About>
        <h1 className="text-white">Hi there, I'm</h1>
        <h2 className="text-white">Hélio {' '}
        <Typewriter
            words={['Front-End Developer', 'UI/UX Design', 'Web Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={2000}
          
          />


        </h2>
        <p className="dark:text-white">
          Desenvolvedor web com mais de 10 anos de experiência.<br/> Atuo nas áreas de tecnologias web, design e UX/UI.<br/><br/>

          Gosto de me envolver em projetos que vão além da parte técnica. Busco oportunidades onde eu possa usar também o lado criativo, propondo soluções que sejam úteis, diferentes e que realmente façam a diferença.
          Acredito que quando tecnologia e design caminham juntos, o resultado é sempre mais relevante.
        </p>
        <button className='rounded-full'><a href={curriculo} target="_blank" className="px-8 py-3 rounded-full flex items-center  dark:bg-white dark:text-black font-bold">Baixar CV <BiCloudDownload size={23}/></a></button>
      </About>

      <Photo>        
        <img src={fotoAbout} alt=""/>
      </Photo>

    </Container>
  )
}
function componentDidMount() {
  throw new Error('Function not implemented.');
}

function componentWillUnmount() {
  throw new Error('Function not implemented.');
}

