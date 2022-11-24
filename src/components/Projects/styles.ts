import styled, {keyframes} from "styled-components";

export const Container = styled.div`
width: 80%;
margin:0 auto;
height: auto;
display: grid;
background-color:#444;
padding:10rem 1rem;
`
const animate = keyframes`
    0% {
        margin-top:2rem;
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        margin-top:0rem;
        opacity: 1;
    }
`;


export const WrapperTabs = styled.div`
   

    .block-tabs{
        width: 40%;       
        margin: 0 auto;
    }

    button {
    padding: 15px;
    text-align: center;
    width: 50%;
    background: #222;
    color: #fff;
    cursor: pointer;
    /* border-bottom: 2px solid rgba(0, 0, 0, 0.274); */
    box-sizing: content-box;
    position: relative;
    outline: none;
    /* border-radius: 2rem; */
    margin-bottom: 1rem;
    font-weight: 600;

        :nth-child(1n){
            border-radius: 2rem 0 0 2rem;
        }

        :nth-child(2n){
            border-radius: 0  2rem 2rem 0 ;
        }

        &.active-tabs  {
            background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
            border-bottom: 1px solid transparent;
            transition: 0.4s ease-in-out;
            color: #fff;
        }       
    } 

    

    .content {
        display: none;
        transition: 0.4s ease-in-out;

    }

    .active-content {
        display: flex;
        animation: ${animate} 0.5s;
        justify-content:center;
        @media(max-width: 600px){
            flex-wrap: wrap;
        }

    }
    
`