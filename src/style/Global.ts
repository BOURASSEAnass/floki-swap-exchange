import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: rubik;
    src: url('fonts/Rubik-Regular.ttf'),
      url('fonts/Rubik-Medium.ttf')
  }
  * {
    font-family: rubik, sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
`

export default GlobalStyle
