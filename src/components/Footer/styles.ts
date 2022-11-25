import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    margin:0 auto;
    height: 100vh;
    background: gray;
    padding:10rem 0;

    .icon-git{
        svg{
            position: relative;
            z-index:999;
            transition: all 0.3s ease-in-out;
            &:hover{
                color: #fff;
            }                
        } 
    }
    

   
`

export const WrapperFooter = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 600px){
        flex-direction: column;
        
    }
`
export const InforContacts = styled.div`
    display: flex;
    align-items: center;
    width:33%;
    transition: all 0.3s ease-in-out;

    @media (max-width: 600px){
        width:100%;
        margin:0.5rem 0;
    }
    &:hover{
        opacity:0.5;
    }
    h6{
        line-height:20px;
    }

    svg{ 
        margin:0.5rem;
    }



`