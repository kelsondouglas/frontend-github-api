import Header from "./components/Header";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import SearchBar from "./components/SearchBar";
import GlobalStyle from "./global/GlobalStyles";
import { UserProvider } from "./hooks/useUser";
import { Container } from "./styles";

function App() {
  return (
    <UserProvider>
      <Container>
        <Header />
        <SearchBar />
        <Repositories />
      </Container>
      <GlobalStyle />
    </UserProvider>
  );
}

export default App;
