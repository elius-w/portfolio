import React, {useState} from 'react'
import { ProjectCard } from '../ProjectCard'
import {Container, WrapperTabs} from './styles'

import logoDriver from '../../assets/google-drive-icon.svg';


import villadosnativos from '../../assets/villadosnativos.png'
import portobrasiltur from '../../assets/portobrasiltur.png'

import terratrancoso from '../../assets/terratrancoso.png'
import estudacom from '../../assets/estudacom.png'
import lojacharme from '../../assets/lojacharme.png'

import LP1simulaenem from '../../assets/LP1simulaenem.png'
import LP2halloween from '../../assets/LP2halloween.png'
import LP3embaixadores from '../../assets/LP3embaixadores.png'

import lpsomar from '../../assets/lpsomar.png'

import resortlatorre from '../../assets/resortlatorre.png'
import minhacarteira from '../../assets/minhacarteira.png'
import blog from '../../assets/blog.png'


export const Projects = () => {

  const wordpress = [
    {
      imgUrl: estudacom,
      title: "Estuda.com",
      description: "Site da Plataforma",
      link:"https://estuda.com"
    },  
    {
      imgUrl: terratrancoso,
      title: "Terra Trancoso",
      description: "Site de Imóveis",
      link:"https://terratrancoso.com.br/"
    },  
    {
      imgUrl: villadosnativos,
      title: "Villa dos Nativos",
      description: "Site Institucional",
      link:"https://villadosnativos.com.br"
    },  
    {
      imgUrl: lpsomar,
      title: "Somar Construtora",
      description: "Landing Page",
      link:"https://somarconstrutora.com/casabrisadavilla/"
    },
    {
      imgUrl: portobrasiltur,
      title: "Porto Brasil Turismo",
      description: "Loja Virtual",
      link:"https://portobrasiltur.com.br"
    },
    {
      imgUrl: lojacharme,
      title: "Loja Charme",
      description: "Loja Virtual",
      link:"https://lojacharme.com.br"
    }, 
    {
      imgUrl: LP2halloween,
      title: "Estuda.com",
      description: "Halloween LP",
      link:"https://lp.estuda.marketing/halloween"
    },   
    {
      imgUrl: LP1simulaenem,
      title: "Estuda.com",
      description: "Simula Enem LP",
      link:"https://lp.estuda.marketing/simula-enem-2023"
    },     
    {
      imgUrl: LP3embaixadores,
      title: "Estuda.com",
      description: "Embaixadores LP",
      link:"https://lp.estuda.marketing/embaixadores"
    }
    
  ]

  const projectsReact = [
    {
      imgUrl: resortlatorre,
      title: "Resort La Torre",
      description: "Site de Reservas",
      link:"https://resortlatorre.com.br/"
    },
    {
      imgUrl: minhacarteira,
      title: "Carteira Financeira",
      description: "Dashboard",
      link:"https://dashboard-react-wallet.vercel.app/"
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
          Aqui está uma pequena seleção com algumas aplicações, sites e criativos que desenvolvi recentemente<br/> 
        </p>
                
        <WrapperTabs>

            <div className="block-tabs flex">
              <button className={toggleState === 1 ? "active-tabs" : ""} onClick={() => toggleTab(1)}>
                ReactJs
              </button>
              
              <button className={toggleState === 2 ? "active-tabs" : ""} onClick={() => toggleTab(2)}>
                Wordpress
              </button>  
              <button className={toggleState === 3 ? "active-tabs" : ""} onClick={() => toggleTab(3)}>
                Criativos
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

              <div className={toggleState === 3 ? "active-content" : "content"}>
                
               <div className="flex flex-col">
                <p className="text-black dark:text-white text-xs text-center mb-2 mt-5 ">Algumas artes criadas recentemente</p>
                
                <a href="https://drive.google.com/drive/folders/1Ig36REUPfJuQ5qqdD7PxLnuC7Cg7o4Br?usp=sharing" target="_blank" className=" rounded-full p-2 px-10 text-white bg-black dark:text-white dark:bg-blue-light flex" >
                  <img src={logoDriver} className="pr-2"/>Visualizar Criativos no Google Drive 
                </a>
               </div>

               
              </div>

            </div>
        </WrapperTabs>
    </Container>
  )
}
