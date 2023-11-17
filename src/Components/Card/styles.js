import styled from "styled-components";

export const Container = styled.div`
  background-color: #eeeeee;
  width: 30rem;
  height: 35rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 1rem;

  .close-btn{
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  .baseInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
    h1 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  h2 {
    font-size: 1.7rem;
    color: green;
  }

  img {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    top: -9rem;
  }

  .btn {
    width: 30rem;
    height: 5rem;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 800px) {
    margin-top: 17rem;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    padding: 0.3rem 0.7rem;
    font-size: 1.3rem;
    border: 1px solid black;
    border-radius: 1rem;
  }
`;
