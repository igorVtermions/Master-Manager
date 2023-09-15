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

export const Bonus = styled.div`
    display: flex;
    gap: .5rem;
`;

export const BonusAdded = styled.ul`
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    list-style: none;
`;

export const BonusItem = styled.li`
    padding: .3rem .7rem;
    font-size: 1.3rem;
    border: 1px solid black;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: .5rem;

    svg{
        cursor: pointer;
    }
`;