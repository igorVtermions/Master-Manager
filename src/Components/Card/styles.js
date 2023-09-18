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
    border-radius: 10rem;
    position: absolute;
    top: 19rem;
  }
  
  ul{
    li{
        font-size: 1.2rem;
    }
  }
  .btn{
    position: absolute;
    bottom: 28rem;
    width: 30rem;
    height: 5rem;
  }
`;
