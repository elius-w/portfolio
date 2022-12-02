import styled from'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export const WrapperSkills = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

`
export const IconSkills = styled.div`
    margin:1rem;
    svg{
        width: 3rem;
        transition: all 0.3s ease-in-out;
        :hover{
            margin-top: -1rem;
        }
    }
    .wordpress{
        svg{
            width: 2rem;
        }
         path{            
            /* fill:gold;    */             
        }
    }
    

`