import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  background-color: #262626;
  border-radius: 4px;
  padding: 3rem;
  .image {
    width: 100%;
    height: 20rem;
    overflow: hidden;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info {
    margin-top: 22px;
    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1.2rem;
    }
    ul {
      display: flex;
      li {
        display: block;
        color: #e5e5e5;
        font-size: 1.4rem;
        &:last-child {
          &::before {
            content: "";
            width: 4px;
            height: 4px;
            background-color: #fafafa;
            display: inline-block;
            vertical-align: middle;
            border-radius: 50%;
            margin: 0 1.2rem;
          }
        }
      }
    }
  }
`;
