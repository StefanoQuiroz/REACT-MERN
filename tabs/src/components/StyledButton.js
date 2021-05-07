import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 0.6rem 3.2rem;
    font-size: 2rem;
    margin: 1.06rem;
    border: 2px solid #f1f1f1;
    background-color: ${props => {
        if(props.bgColor){
            return 'black';
        }else {
            return 'white';
        }
    }};
    color: ${props => {
        if(props.bgColor){
            return 'white';
        }else {
            return 'black'
        }
    }}; 
`;

export default StyledButton;

//Hacerlo mas eficiente con un operador ternario color: ${props => props.bgColor ? 'white' : 'black'} del mismo modo con el background



    