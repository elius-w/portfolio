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
import blog from '../../assets/blog.png'


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
      link:"https://imoveisemporto.com.br"
    },
    {
      imgUrl: orquideashotel,
      title: "Orquideas Praia Hotel",
      description: "Site Institucional",
      link:"https://orquideaspraiahotel.com.br"
    },
    {
      imgUrl: vitoriaregia,
      title: "Vitória Régia Hotel",
      description: "Site Institucional / Em construção",
      link:"#"
    },

  ]

  const projectsReact = [
    {
      imgUrl: minhacarteira,
      title: "Carteira Financeira",
      description: "Dashboard",
      link:"https://dashboard-react-wallet.vercel.app/"
    },
    {
      imgUrl: promodoro,
      title: "Promodoro",
      description: "Temporizador",
      link:"https://moveitcounter.vercel.app/"
    },
    {
      imgUrl: blog,
      title: "Blog",
      description: "Site de noticias",
      link:"https://blogtechnews.vercel.app"
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
          Aqui está uma pequena seleção com alguns sites e aplicações que desenvolvi recentemente<br/> 
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
