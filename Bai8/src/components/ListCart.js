"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CartItem_1 = __importDefault(require("./CartItem"));
function ListCart() {
    return (<>
       <main className='list-cart'>
              <CartItem_1.default></CartItem_1.default>
            </main>
    </>);
}
exports.default = ListCart;
