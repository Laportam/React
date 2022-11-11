import Styled, { ThemeProvider } from 'styled-components';

const defaultMainColor = "#ffd166";

const Anchor = Styled.a`
    display: inline-block;
    font-size: 18px;
    text-decoration: none;
    color: ${ (props) => props.theme.mainColor || defaultMainColor};
    padding: 10px 16px;
    border: 2px solid ${ (props) => props.theme.mainColor || defaultMainColor};
    margin: 5px;
    transition: 320ms;
    &:hover {
        background-color: ${( props ) => props.theme.mainColor || defaultMainColor};
        color: #fff;
        opacity: 0.7
    }
`;

const LightTheme = {
    mainColor: "#e63946"
};

const DarkTheme = {
    mainColor: "#003049"
}

const StyledComponents = () => {
  return (
    <div>
        <h2>Styled Components</h2>
        <Anchor href='https://google.com/'>Son un enlace</Anchor>
        <ThemeProvider theme={LightTheme}>
            <Anchor href='https://google.com/'>Son un enlace</Anchor>
            <Anchor href='https://google.com/'>Son un enlace</Anchor>
            <Anchor href='https://google.com/'>Son un enlace</Anchor>
        </ThemeProvider>
        <ThemeProvider theme={DarkTheme}>
            <Anchor href='https://google.com/'>Son un enlace</Anchor>
        </ThemeProvider>
        <hr/>
    </div>
  )
}

export default StyledComponents
