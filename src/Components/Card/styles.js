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
  li {
    color: black;
  }
`;
