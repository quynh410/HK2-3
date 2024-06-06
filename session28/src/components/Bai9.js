"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class Bai9 extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleThemeChange = () => {
            if (this.state.theme === "light") {
                this.setState({ theme: "dark" });
            }
            else {
                this.setState({ theme: "light" });
            }
        };
        this.handleLanguageChange = () => {
            if (this.state.language === "english") {
                this.setState({ language: "vietnamese" });
            }
            else {
                this.setState({ language: "english" });
            }
        };
        this.state = {
            theme: "light",
            language: "english",
        };
    }
    render() {
        const { theme, language } = this.state;
        let backgroundColor = "";
        let textColor = "";
        if (theme === "light") {
            backgroundColor = "white";
            textColor = "black";
        }
        else if (theme === "dark") {
            backgroundColor = "black";
            textColor = "white";
        }
        return (<div style={{ backgroundColor, color: textColor }}>
          <h2>Nền : {theme}</h2>
          <h2>Ngôn ngữ : {language}</h2>
          <button onClick={this.handleThemeChange}>Change Theme</button>
        <button onClick={this.handleLanguageChange}>Change Language</button>
        </div>);
    }
}
exports.default = Bai9;
