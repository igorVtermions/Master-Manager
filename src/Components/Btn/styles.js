import styled from "styled-components"


export const BtnStyle = styled.button`
    padding: 1rem 2rem;
    background-color: purple;
    color: white;
    font-weight: 500;
    border: purple 1px solid;
    transition: all ease-in 0.2s;
    border-radius: .4rem;

    &:hover{
        background-color: #fefefe;
        color: purple;
        cursor: pointer;
    }
`;