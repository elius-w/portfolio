import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text-small{
        font-size: 3rem;
        line-height:50px;
     }
     .logo{
        img{
            width:10rem;
        }
     }
     .icon-git{
        svg{
            position: relative;
            z-index:999;
            transition: all 0.3s ease-in-out;
            color:#fff;
            &:hover{
                color: gray;
            }                
        } 
    }

    @media (min-width:1024px){
        .text-small{
            font-size: 5rem;
            line-height:68px;
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
    color: #fff;
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