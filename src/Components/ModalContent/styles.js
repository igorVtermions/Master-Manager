import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    form{
        padding: 2rem 0rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`;

export const Title = styled.h2`
    font-size: 2.3rem;
    font-weight: 600;
    color: black;
`;