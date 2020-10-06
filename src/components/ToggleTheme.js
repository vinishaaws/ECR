import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";

export default class ToggleTheme extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}> Toggle </button>;
  }
}
