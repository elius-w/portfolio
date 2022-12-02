import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
padding:10rem 1rem;
@media (max-width: 600px){
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
}
`
export const About = styled.div`
    padding-left:7rem;
    h1{
        font-size: 2rem;
    }
    h2{
        font-size: 4rem;
        font-weight: 900;
        line-height: 70px;
    }
    p{
        font-size: 0.9rem;
        margin: 2rem 0;
    }
    button{
        background: #fff;
        color:#222;
        :hover svg{
            margin-left: 1rem;
        }
        svg{
            margin-left:0.4rem;
            transition: 0.3s ease-in-out;        

        }      
        
    }
    @media (max-width: 600px){
        padding-left:0rem;
        h2{
            font-size: 2rem;
            line-height: 40px;
        }
    }

   
` 
export const Photo = styled.div`` 

