"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function CustomLink() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleNavigation = () => {
        if (window.location.href === 'http://localhost:5173/homepage') {
            navigate('/home-page');
        }
        else {
            navigate('/not-found');
        }
    };
    return (<div>
    <react_router_dom_1.Link to="/" onClick={handleNavigation}>Go to HomePage</react_router_dom_1.Link>
    </div>);
}
exports.default = CustomLink;
