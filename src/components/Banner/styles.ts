import styled,{keyframes} from "styled-components";


const sliderText = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }   
    100%{
        transform: translate3d(-1000px, 0, 0);
    }
`;
export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
padding:10rem 1rem;
position: relative;
overflow: hidden;


@media (max-width: 600px){
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
}
`
export const SliderText = styled.div`
position: absolute;
width: 100%;
z-index: 8;
padding: 1rem;
animation: ${sliderText} 50s linear infinite alternate;
top: 10%;



ul,li{
        display: flex;
        flex: none;
        align-items: center;
        flex-wrap: nowrap;
        font-size: 11rem;
        margin: 0 1rem;
        color: #404040;
        font-weight: 700;
        opacity: 0.6;
        img{
            width: 2rem;
        } 
    }
`
export const About = styled.div`
    padding-left:30%;
    h1{
        font-size: 1.5rem;
    }
    h2{
        font-size: 3rem;
        font-weight: 900;
        line-height: 60px;
        background: #27015a;
        display: inline;
    }
    p{
        font-size: 0.9rem;
        margin: 2rem 0;
    }
    button{
        background: #000;
        color: #fff;
        :hover svg{
            margin-left: 1rem;
        }
        svg{
            margin-left:0.4rem;
            transition: 0.3s ease-in-out;        

        }      
        
    }
    @media (max-width: 600px){
        padding:0 2rem;
        h2{
            font-size: 2rem;
            line-height: 40px;
        }
    }

   
` 

const updown = keyframes`
   0% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(-5px);
    }
`

export const Photo = styled.div`
 
    img{
        animation: ${updown} 10s linear infinite ;


    }

` 

