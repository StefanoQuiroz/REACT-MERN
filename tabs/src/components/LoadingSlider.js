import styled, {keyframes} from 'styled-components';

const sideToSideSlide = keyframes`
    0%{
        background: aqua;
        box-shadow: 0 0 2px aqua;
        width: 80px;
        left: 0;
    }
    25%{
        background: aqua;
        box-shadow: 0 0 2px aqua;
        width: 400px;
        left: 0;
    }
    50%{
        background: greenyellow;
        box-shadow: 0 0 2px greenyellow;
        width: 10px;
        left: 390px;
    }
    75%{
        background: greenyellow;
        box-shadow: 0 0 2px greenyellow;
        width: 400px;
        left: 0;
    }
    100%{
        background: aqua;
        box-shadow: 0 0 2px aqua;
        width: 80px;
        left: 0;
    }
`;

const LoadingSlide = styled.div`
    position: relative;
    margin-top: 20px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: aqua;
    box-shadow: 0 0 0px aqua;
    animation: ${sideToSideSlide} 2s ease infinite;    
`;

export default LoadingSlide;