import styled, {keyframes} from "styled-components";

interface ScrollToTopProps {
    show: boolean;
}

const rockets = keyframes`

    from {
        bottom: 85px;
        opacity: 1;
      }
    
    to {
        bottom: calc(100vh - 100px);
        opacity: 0;
    }

`

export const Container = styled.div<ScrollToTopProps>`
    width:45px;
    height: 45px;
    border-radius: 100%;
    position: fixed;
    bottom: 5rem;
    right: 2rem;
    opacity: ${(props) => (props.show ? '1' : '0')};
    transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(20%)')};
    transition: all 0.4s ease;
    display:flex;
    align-items: center;
    justify-content: center;
    transform: scale(1);

    :hover{
        @media (min-width:1024px){
            background: #dfdfdf;
            transform: scale(1.2);
        }
       
    }

   
    &.toInfinityAndBeyond {
        /* animation: ${rockets} 0.8s;    */
        

    }

    button{
        background:#fff;
        color: #222;
        display:flex;
        align-items: center;
        justify-content: center;
        width:30px;
        height: 30px;
        border-radius: 100%;
        font-size: 0.9rem; 
        transform: all 0.2s ease-in-out;

        &:hover{
            @media (min-width:1024px){
                background:#222;
                color: #fff;    

            }
         
        }
        
    }


`