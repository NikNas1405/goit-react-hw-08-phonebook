import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  line-height: 1.5;
  color: #008080;
  padding-top: 30px;
  padding-bottom: 30px;
  background:  #f5fcf6 url(https://img.freepik.com/free-vector/leaves-background-with-metallic-foil_79603-956.jpg) 0 0 / cover no-repeat;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

h2 {
  text-align:center;
  font-weight: 900;
  font-size: 36px;
  color: #008080;
  margin: 0;
}
`;

export const Container = styled.div`
  max-width: 600px;
  max-height: 660px;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const SubTitle = styled.h3`
  color: #008080;
`;
