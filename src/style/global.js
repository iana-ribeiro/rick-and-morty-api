import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  color: #FAFAFA;
 }

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  background-color: transparent;
  border: none;
}

body {
  background-color: #0A0A0A;
 }

 html {
  font-size: 62.5%;
 }
`;
export default GlobalStyle;
