import styled from 'styled-components'

interface IScrollProps{
    show: boolean;
  }
interface IHeaderProps{
    menuIsOpen: boolean;
} 

export const Container = styled.div<IScrollProps>`    

    height:${props => props.show ? '0' : '120px'};

    position:fixed;
    z-index: 99999;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .5s ease;   

    &.scrolled{
        height: 60px;
    }

    @media (min-width:1024px){
        backdrop-filter:blur(5px);          
        &.bg-hide{background:transparent;}  
    }
    
`

export const InnerHeader = styled.div<IScrollProps>`
    width: 80%;

    margin:0 auto;
    height:${props => props.show ? '60px' : '120px'};
    transition: .5s ease;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @media (max-width: 600px) {
        width: 100%;
    }
`
export const Overlay = styled.div<IHeaderProps>`
@media (max-width: 600px) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; 
  width: 100%;
  height: 100vh;
  transition: 0.3s linear;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter:${(props) => (props.menuIsOpen ? 'blur(4px)' : 'blur(0px)')} ;    

  visibility: ${(props) => (props.menuIsOpen ? 'visible' : 'hidden')};
  ${({menuIsOpen}) =>`
    opacity: ${menuIsOpen ? '1' : '0'}
  ` 
  }
 

}  
`
export const MainLinks = styled.div`
    width: 35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.div<IScrollProps>`

    a{
        cursor: pointer;
    }

    img{
        width:${(props) => (props.show ? '80px' : '110px')};
        transition: .5s ease;
        display: flex;
    }

    @media (max-width: 600px){
        width: 100%;
        display: flex;
        justify-content:center;
        position: absolute;
       
    }
`
export const ToggleMenu = styled.button`
    padding:0.3rem;
    border-radius: 5px;
    border: none;
    font-size: 22px;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.3s;
    display: none;
    .closeColor{color:#ccc}

    &:hover {
        opacity: 0.7;
    }
    margin-right: 2rem;
    @media (max-width: 600px) {
        display: flex;
        position: absolute;
        right: 0;
        z-index:88;    
    }

`
export const Menu = styled.div<IHeaderProps>`
    
    display:flex;
    transition: all 0.4s ease-out; 
    
    ul,li{
        display:flex;
    }
    a{
        margin:0 10px;
        align-items: center;
        display: flex;
        padding:2px 5px;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer; 
        transition: all .2s ease-in-out;
        &.active{
            border-radius: 5px;
            opacity: 1; 
            color: #bc79ff;
        }    
    }
    a:hover{
        opacity: 1;
    }

    .InfoMob{
        display: none;
    }

    @media (min-width: 1024px){
        &.teste{
            background:none;
        }
    }

    @media (max-width: 600px) {   
        position: fixed;
        top:0;
        right: 0;    
        z-index:3;
        padding: 7rem 2rem;
        height: 100vh;
        width: 15rem;
        display: flex;
        transition: all 0.4s ease-out; 
        /* background: #252525;  */
        flex-direction: column;


        ul, li{
        flex-direction: column;
        }
        a{
        margin:5px;
        font-size: 1.2rem;
        }

        .InfoMob{
            display: flex;
            flex-wrap: wrap;
            font-size: 0.8rem;
            padding-left: 0.7rem;
            justify-content:space-between;
            margin-top:2rem;
            span {
                margin-bottom:1rem;
                display: flex;
                flex-wrap: wrap;
                line-height: 24px;
                b{
                    font-weight: 900;
                    font-size: 1rem;
                }

            }
            a{
                display: flex;

            }
        }
      
 
        ${({ menuIsOpen }) => `
            transform: ${menuIsOpen ? 'translateX(0)' : 'translateX(120%)'};
        `
    }
       
  } 

`
export const SocialIcons = styled.div`
    display:flex;
    padding: 10px;
    width: 8rem;
    justify-content: space-between;
    @media (max-width: 600px) {  
        display: none;
    }


    a{
        width: 30px;
        height: 30px;
        display: inline-flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        line-height: 1;
    }  
    

    a svg {
	z-index: 1;
	transition: 0.3s ease-in-out;
    }

    a::before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    transform: scale(0);
	transition: 0.3s ease-in-out;
    }

    a:hover::before {
    transform: scale(1);
    }

    a:hover svg {
	filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);

   
} 
  
`