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
          Desenvolvedor web, mais de 9 anos de experiência progredindo todos os dias, atuando em tecnologias web,  design e UI/UX.<br/><br/>

          Minha busca por desafios vai além do convencional; desejo me imergir em projetos que não apenas demandem habilidades técnicas, mas também ofereçam a oportunidade de criar soluções criativas e inovadoras.
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

