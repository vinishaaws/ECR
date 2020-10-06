import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";

// one way of using context.
export default class Booklist extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.ui, color: theme.syntax }}
      >
        <ul>
          <li>the way of king11</li>
          <li>the name of wind</li>
          <li>final empire</li>
        </ul>
      </div>
    );
  }
}
