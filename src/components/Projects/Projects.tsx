import React, {useState} from 'react'
import { ProjectCard } from '../ProjectCard'
import {Container, WrapperTabs} from './styles'

import villadosnativos from '../../assets/villadosnativos.png'
import portobrasiltur from '../../assets/portobrasiltur.png'
import maniaacessorios from '../../assets/maniaacessorios.png'
import imoveisemporto from '../../assets/imoveisemporto.png'
import orquideashotel from '../../assets/orquideashotel.png'
import vitoriaregia from '../../assets/vitoriaregia.png'

import minhacarteira from '../../assets/minhacarteira.png'
import promodoro from '../../assets/promodoro.png'
import clonetesla from '../../assets/clonetesla.png'


export const Projects = () => {

  const wordpress = [

    {
      imgUrl: villadosnativos,
      title: "Villa dos Nativos",
      description: "Site Institucional",
      link:"https://villadosnativos.com.br"
    },
    {
      imgUrl: portobrasiltur,
      title: "Porto Brasil Turismo",
      description: "Loja Virtual",
      link:"https://portobrasiltur.com.br"
    },
    {
      imgUrl: maniaacessorios,
      title: "Mania Acessórios",
      description: "Loja Virtual",
      link:"https://lojamaniaacessorios.com.br"
    },
    {
      imgUrl: imoveisemporto,
      title: "Imóveis Emporto",
      description: "Portal Imobiliário",
      link:"https://lojamaniaacessorios.com.br"
    },
    {
      imgUrl: orquideashotel,
      title: "Orquideas Praia Hotel",
      description: "Site Institucional",
      link:"https://lojamaniaacessorios.com.br"
    },
    {
      imgUrl: vitoriaregia,
      title: "Vitória Régia Hotel",
      description: "Site Institucional",
      link:"https://lojamaniaacessorios.com.br"
    },

  ]

  const projectsReact = [
    {
      imgUrl: minhacarteira,
      title: "Minha Carteira",
      description: "Dashboard",
      link:"#"
    },
    {
      imgUrl: promodoro,
      title: "Promodoro",
      description: "Temporizador",
      link:"#"
    },
    {
      imgUrl: clonetesla,
      title: "Clone Tesla",
      description: "Landing Page",
      link:"#"
    },

  ]


  const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index: React.SetStateAction<number>) => {
      setToggleState(index);
    };


  return (
    <Container className="container" id="projects">
       <h2 className="text-black dark:text-white text-center text-3xl font-bold">Projects</h2>
        <p className="text-gray-black dark:text-white text-center text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>
                
        <WrapperTabs>

            <div className="block-tabs flex">
              <button className={toggleState === 1 ? "active-tabs" : ""} onClick={() => toggleTab(1)}>
                ReactJs
              </button>
              <button className={toggleState === 2 ? "active-tabs" : ""} onClick={() => toggleTab(2)}>
                Wordpress
              </button>     
            </div>

            <div className="content-tabs">
              <div className={toggleState === 1 ? "active-content" : "content"}>
               

                {
                  projectsReact.map((project, index) =>{
                    return(
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    )
                  })
                }
               
              
              </div>

              <div className={toggleState === 2 ? "active-content" : "content"}>
                
                {
                  wordpress.map((project, index) =>{
                    return(
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    )
                  })
                }
               
              </div>

            </div>
        </WrapperTabs>
    </Container>
  )
}
