import React from "react";
import NavBar from "./components/NavBar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/themeContext";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/authContext";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <Booklist />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
        <SongList/>
    </div>
  );
}

export default App;
