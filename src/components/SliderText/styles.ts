import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin:0 auto;
    height: auto;
    background: gold;
    padding:2rem 0;
    overflow: hidden;


`

const sliderText = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }   
    100%{
        transform: translate3d(-1000px, 0, 0);
    }
`;

export const SliderWrapper = styled.div`
    width: 100%;
    animation: ${sliderText} 20s linear infinite alternate;
    padding:1rem 0;


    ul,li{
        display: flex;
        flex: none;
        align-items: center;
        flex-wrap: nowrap;
        font-size: 1rem;
        margin: 0 1rem;
        img{
            width: 2rem;
        } 
    }

`
