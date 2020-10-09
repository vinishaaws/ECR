import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { AuthContext } from "../contexts/authContext";

// another way of using context
export default class NavBar extends Component {
  // static contextType = ThemeContext;q

  render() {
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {context => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = context;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context api123</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged In" : "Logged Out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
