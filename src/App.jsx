import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
import GlobalStyle from "./global/GlobalStyles";
import { UserProvider } from "./hooks/useUser";

function App() {
  return (
    <UserProvider>
      <SearchBar />
      <Profile />
      <GlobalStyle />
    </UserProvider>
  );
}

export default App;
