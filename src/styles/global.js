import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;

}
body{
    width: 100%;
    height: 100vh;
    background-image: url("./Background.png");
    background-size: cover;
}
`;
