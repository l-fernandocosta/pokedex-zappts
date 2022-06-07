import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
}


html, body, root {
  max-width: 100vw;
  max-height: 100vh; 
  width: 100%; 
  height: 100%; 
}

*, button, input {
  border: 0; 
  background: "none";
  font-family: 'Poppins', sans-serif;
}

html {
  scroll-behavior: smooth; 
  color: ${(props) => props.theme.colors.text.black100}; 
  background: ${(props) => props.theme.colors.backgrounds.container}; 
}
  
html, body, .app {
  overflow: none; 
  cursor: default; 
}


a {
  text-decoration: none; 
  color: ${(props) => props.theme.colors.text.black100}
}
`;
