import React from 'react'

import {GoEye} from'react-icons/go'
import {Container} from './styles'

interface IProjectProps {
  imgUrl: string,
  title: string,
  description: string,
  link: string,
}


export const ProjectCard: React.FC<IProjectProps> = ({imgUrl, title, description, link}) => {
  return (
    <Container>
        <div className="project-img-box">
            <img src={imgUrl} alt=""/>
            <div className="project-txt">
                <h4>{title}</h4>
                <span>{description}</span>
                <a href={link} target="_blank" >Ver OnLine<GoEye/></a>
            </div>
        </div>
    </Container>
  )
}
