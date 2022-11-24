import React from 'react'

import {GoEye} from'react-icons/go'
import {Container} from './styles'

export const ProjectCard = () => {
  return (
    <Container>
        <div className="project-img-box">
            <img src="https://siteinspire.s3.us-east-1.amazonaws.com/screengrabs/images/000/015/715/small.jpg"/>
            <div className="project-txt">
                <h4>Lorem inpsum</h4>
                <span>Description</span>
                <a href="#">Ver OnLine<GoEye/></a>
            </div>
        </div>
    </Container>
  )
}
