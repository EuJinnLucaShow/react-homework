import logo from './logo.svg';
import { AppDiv, AppHeader, AppLogo, AppLink} from './App.styled';

function App() {
  return (
    <AppDiv>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>npm run deploy</p>
        <p>Victor special for you! 👨🏽‍💻</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React! 
        </AppLink>
      </AppHeader>
    </AppDiv>
  );
}

export default App;
