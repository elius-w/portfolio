import styled from'styled-components'

export const Container = styled.div`

    margin: 0.7rem;
    width: 30%;
   
    @media (max-width: 1024px){
        margin: 0.5rem 0.5rem;
        width: 45%;
    }
    @media (max-width: 600px){
        margin: 1rem 0;
        width: 100%;
    }
    
    /* :first-child{
        margin-left: 0;
    }
    :last-child{
        margin-right: 0;
    } */

    .project-img-box{
        position: relative;
        overflow: hidden;
        width: 100%;
        border-radius: 1.6rem;
       


        ::before{
            content: "";
            background: #222;
            /* background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%); */
            opacity: 0.75;
            position: absolute;
            width: 100%;
            height: 0;
            transition: 0.4s ease-in-out
        }

        :hover::before {
            height: 100%;
        } 

        
    }

    .project-txt {
        position: absolute;
        display: flex;
        flex-direction: column;
        text-align: center;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.5s ease-in-out;
        opacity: 0;
        width: 100%;
        

        h4{
            font-size:1.2rem;
            font-weight: 700;
            color:#fff;
        }
        span{
            font-size: 0.8rem;
            font-weight: normal;
            margin-bottom: 0.8rem;
            color:#fff;
        }
        a{
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding:1rem;
            font-size: 0.9rem;
            margin: 0 auto;
            width:10rem;
            border-radius: 2rem;
            transition: all 0.3s ease-in-out;
            :hover{
                background: #ccc;
            }

            :hover{
                svg{
                    margin-left: 0.8rem;
                }
            }
            
            svg{
                margin-left: 0.2rem;
                transition:all 0.2s ease-in-out;
            }

        }
    }

    :hover .project-txt {
        top: 50%;
        opacity: 1;
    }

   
        

`