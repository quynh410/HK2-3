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
function B5() {
    const [todos, setTodos] = (0, react_1.useState)(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    const [newTodo, setNewTodo] = (0, react_1.useState)('');
    const handleAddTodo = (0, react_1.useCallback)(() => {
        if (newTodo.trim() !== '') {
            const newTodos = [...todos, newTodo];
            setTodos(newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            setNewTodo('');
        }
    }, [newTodo, todos]);
    const handleInputChange = (0, react_1.useCallback)((e) => {
        setNewTodo(e.target.value);
    }, []);
    (0, react_1.useEffect)(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    return (<div>
      <h1>Bài 5/ 38</h1>
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange}/>
        <button onClick={handleAddTodo}>Thêm</button>
      </div>
      <ul>
        {todos.map((todo, index) => (<li key={index}>{todo}</li>))}
      </ul>
    </div>);
}
exports.default = B5;
