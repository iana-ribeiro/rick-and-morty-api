import styled from "styled-components";

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

export const HeaderApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4.8rem;
  margin-bottom: 4.8rem;
  border-bottom: 1px solid #737373;
  h1 {
    font-family: "Press Start 2P", sans-serif;
    font-size: 2.4rem;
  }
  span {
    color: #d4d4d4;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const ContentCharacters = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
  }
  button {
    display: block;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.6rem 2.4rem;
    background-color: #7c3aed;
    border-radius: 4px;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 4.2rem;
    transition: filter 0.3s ease;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
