import React, { Component } from 'react'
interface AppState {
  theme: string;
  language: string;
}

export default class Bai9 extends Component<{}, AppState> {
  constructor(props: {}){
    super(props)
    this.state = {
      theme: "light",
      language: "english",
    }
  }
  handleThemeChange = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  };

  handleLanguageChange = () => {
    if (this.state.language === "english") {
      this.setState({ language: "vietnamese" });
    } else {
      this.setState({ language: "english" });
    }
  };

  render() {
    const { theme, language } = this.state;

    let backgroundColor = "";
    let textColor = "";
    if (theme === "light") {
      backgroundColor = "white";
      textColor = "black";
    } else if (theme === "dark") {
      backgroundColor = "black";
      textColor = "white";
    }
return (
  <div style={{ backgroundColor, color: textColor }}>
          <h2>Nền : {theme}</h2>
          <h2>Ngôn ngữ : {language}</h2>
          <button onClick={this.handleThemeChange}>Change Theme</button>
        <button onClick={this.handleLanguageChange}>Change Language</button>
        </div>
)
  }
}
