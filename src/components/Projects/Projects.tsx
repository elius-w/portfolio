import React, {useState} from 'react'
import { ProjectCard } from '../ProjectCard'
import {Container, WrapperTabs} from './styles'


export const Projects = () => {

  const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index: React.SetStateAction<number>) => {
      setToggleState(index);
    };


  return (
    <Container>
       <h2 className="text-white text-center text-3xl">Projects</h2>
        <p className="text-gray-200 text-center text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>
                
        <WrapperTabs className=" flex flex-col relative break-all py-6 pr-6 pl-6">

            <div className="block-tabs flex">
              <button className={toggleState === 1 ? "active-tabs" : ""} onClick={() => toggleTab(1)}>
                Tab 1
              </button>
              <button className={toggleState === 2 ? "active-tabs" : ""} onClick={() => toggleTab(2)}>
                Tab 2
              </button>     
            </div>

            <div className="content-tabs">
              <div className={toggleState === 1 ? "active-content" : "content"}>
               
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
              
              </div>

              <div className={toggleState === 2 ? "active-content" : "content"}>
                <h2>Content 2</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                  voluptatum qui adipisci.
                </p>
               
              </div>

            </div>
        </WrapperTabs>
    </Container>
  )
}
