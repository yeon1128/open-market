import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${reset}

.ir {
        position: absolute;
        clip-path: inset(50%);
        width:1px;
        height: 1px;
        margin:-1px;
        overflow:hidden;
}

button{
    border: 0;
    cursor: pointer;
    background-color: transparent;
}

a {
    color: black;
    text-decoration:none;
}
`;
