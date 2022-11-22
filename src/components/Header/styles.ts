import styled from 'styled-components'

interface IScrollProps{
    show: boolean;
  }
interface IHeaderProps{
    menuIsOpen: boolean;
}  

export const Container = styled.div<IScrollProps>`
    background: #000;
    height:${props => props.show ? '0' : '60px'};

    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .5s ease;

    &.scrolled{
        background:gold;
        height: 40px;
    }
    
`

export const InnerHeader = styled.div<IScrollProps>`
    width: 80%;

    margin:0 auto;
    background: red;
    height:${props => props.show ? '40px' : '60px'};
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
  height: 100%;
  transition: 0.3s linear;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter:${(props) => (props.menuIsOpen ? 'blur(3px)' : 'blur(0px)')} ;    

  visibility: ${(props) => (props.menuIsOpen ? 'visible' : 'hidden')};
  ${({menuIsOpen}) =>`
    opacity: ${menuIsOpen ? '1' : '0'}
  ` 
  }
 

}  
`
export const MainLinks = styled.div`
    width: 30rem;
    background:#ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.div<IScrollProps>`

    img{
        width:${props => props.show ? '40px' : '60px'};
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
    color: #000;
    cursor: pointer;
    transition: opacity 0.3s;
    background: #ccc;
    display: none;
    .closeColor{color:#444}

    &:hover {
        opacity: 0.7;
    }
    margin-right: 1rem;
    @media (max-width: 600px) {
        display: flex;
        position: absolute;
        right: 0;
        z-index:88;    
    }

`
export const Menu = styled.div<IHeaderProps>`
    display:flex;
    background:gold;
    transition: all 0.4s ease-out; 



    ul,li{
        display:flex;
        background: orange;
    }
    a{
        background: green;
        margin:0 10px;
        align-items: center;
        display: flex;
        padding:5px 0px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.9rem;
        opacity: 0.75;        
    }
    a:hover{
        opacity: 1;
    }

    @media (max-width: 600px) {   
        position: fixed;
        top:0;
        right: 0;    
        z-index:3;
        padding: 7rem 2rem;
        height: 100vh;
        width: 12rem;
        display: flex;
        justify-content: center;
        transition: all 0.4s ease-out; 


        ul, li{
        flex-direction: column;
        }
        a{
        margin:5px;
        }
 
        ${({ menuIsOpen }) => `
      transform: ${menuIsOpen ? 'translateX(0)' : 'translateX(120%)'};
    `}
       
  } 

`
export const SocialIcons = styled.div`
    display:flex;
    background:gray;
    padding: 10px;
    width: 8rem;
    justify-content: space-between;
    @media (max-width: 600px) {  
        display: none;
    }


    a{
        width: 30px;
        height: 30px;
        background: rgba(217, 217, 217, 0.1);
        display: inline-flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        line-height: 1;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }

    a img {
	width: 45%;
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

    a:hover img {
	filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);

   
} 
  
`