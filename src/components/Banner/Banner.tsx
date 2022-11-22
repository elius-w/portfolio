import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {IoIosArrowDropright} from 'react-icons/io'
import {Container, About, Photo} from './styles'


export const Banner = () => {
  return (
    <Container>
      <About>
        <h1 className="text-white">Hi! I'm</h1>
        <h2 className="text-white">Hélio {' '}
        <Typewriter
            words={['Web Designer', 'UI/UX Designer', 'Web Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={2000}
          
          />


        </h2>
        <p className="text-white">
          Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
          Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500
        </p>
        <button className="px-8 py-2 rounded-full flex items-center text-white bg-gray-600">Let’s Connect <IoIosArrowDropright size={23}/></button>
      </About>

      <Photo>
        PHOTO
      </Photo>

    </Container>
  )
}