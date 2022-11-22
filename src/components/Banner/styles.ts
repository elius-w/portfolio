import styled from "styled-components";

export const Container = styled.div`
width: 80%;
margin:0 auto;
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
background-color:gray;
padding:10rem 1rem;
@media (max-width: 600px){
    grid-template-columns: 1fr;
}
`
export const About = styled.div`
    h1{
        font-size: 2rem;
    }
    h2{
        font-size: 4rem;
        font-weight: 900;
        line-height: 60px;
    }
    p{
        font-size: 0.9rem;
        margin: 2rem 0;
    }
    button{
        :hover svg{
            margin-left: 1rem;
        }
        svg{
            margin-left:0.4rem;
            transition: 0.3s ease-in-out;        

        }      
        
    }
` 
export const Photo = styled.div`` 

