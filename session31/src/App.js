"use strict";
// import React, { Component } from 'react'
// // import ClassComponent from './components/ClassComponent'
// // import A from './components/A'
// import Bai1 from './components/Bai1'
// import Bai2 from './components/Bai2'
// import Bai3 from './components/Bai3'
// import Bai4 from './components/Bai4'
// import Bai5 from './components/Bai5'
// import Bai6 from './components/Bai6'
// import Bai7 from './components/Bai7'
// import Bai8 from './components/Bai8'
// import Bai9 from './components/Bai9'
// import Bai10 from './components/Bai10'
// import Bai11 from './components/Bai11'
// import './App.css'
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// interface Props{
// }
// interface State{
//   value:string;
//   message:string;
// }
// export default class App extends Component<Props, State> {
//   // const[active, setActive]= useState<boolean>(true)
//   // const removedComponent = () => {
//   //   setActive(!active)
//   // }
//   constructor(props:Props){
//     super(props)
//     this.state={
//       value:'Open the from',
//       message:'Interface rendering'
//   }
// }
//   updateValue= ()=>{
//     this.setState({
//       value:'Close the form',
//     });
//   }
//   updateMessage=()=>{
//     this.setState({
//       message:'Class rendering'
//     });
//   }
//   render() {
//     return (
//       <div>
//         {/* <ClassComponent></ClassComponent>
//         <A></A>  
//           {active ? <A></A>:""}    */}
//         {/* <button onClick={removedComponent}>Tháo gỡ component A</button> */}
//         <Bai1></Bai1>
//         <Bai2></Bai2>
//         <Bai3></Bai3>
//         <Bai4></Bai4>
//         <div>
//           <Bai5 value={this.state.value} />
//           <button onClick={this.updateValue}>Change props</button>
//         </div>
//         <div>
//           <Bai6 message={this.state.message} />
//           <button onClick={this.updateMessage}>Change props</button>
//         </div>
//         <Bai7></Bai7>
//         <Bai8></Bai8>
//         <Bai9></Bai9>
//         <Bai10></Bai10>
//         <Bai11></Bai11>
//       </div>
//     )
//   }
// }
const react_1 = __importStar(require("react"));
const Bai11_1 = __importDefault(require("./components/Bai11"));
class App extends react_1.Component {
    constructor(props) {
        super(props);
        // hàm mở modal
        this.handleClick = (deleteJobId) => {
            this.setState({ show: true, deleteJobId });
        };
        this.handleCloseModal = () => {
            this.setState({
                show: false,
                deleteJobId: null
            });
        };
        // Hàm xóa công việc
        this.handleDeleteJob = () => {
            const { deleteJobId, jobs } = this.state;
            const updatedJobs = jobs.filter(job => job.id !== deleteJobId);
            this.setState({ jobs: updatedJobs, show: false, deleteJobId: null });
            localStorage.setItem("jobs", JSON.stringify(updatedJobs));
        };
        // Hàm thêm công việc
        this.handleCreateJob = () => {
            // validate dữ liệu đầu vào
            if (!this.state.inputValue) {
                alert("Vui lòng nhập tên công việc");
            }
            else {
                const job = {
                    id: Math.ceil(Math.random() * 10000),
                    name: this.state.inputValue,
                    status: false,
                };
                // push dữ liệu vào trong mảng
                const updatedJobs = [...this.state.jobs, job];
                // lưu dữ liệu trên local
                localStorage.setItem("jobs", JSON.stringify(this.state.jobs));
                // Reset lại giá trị trong ô input
                this.setState({
                    jobs: updatedJobs,
                    inputValue: "",
                });
            }
        };
        // Cập nhật trạng thái công việc
        this.handleToggleJobStatus = (jobId) => {
            const { jobs } = this.state;
            const updatedJobs = jobs.map(job => {
                if (job.id === jobId) {
                    return Object.assign(Object.assign({}, job), { status: !job.status });
                }
                return job;
            });
            this.setState({ jobs: updatedJobs });
            localStorage.setItem("jobs", JSON.stringify(updatedJobs));
        };
        this.handleEditJob = () => {
        };
        this.state = {
            show: false,
            inputValue: "",
            jobs: [],
            deleteJobId: null
        };
    }
    componentDidMount() {
        const jobLocal = localStorage.getItem("jobs");
        this.setState({
            jobs: jobLocal ? JSON.parse(jobLocal) : [],
        });
    }
    render() {
        const { jobs } = this.state;
        return (<>
        {this.state.show === true ? (<Bai11_1.default deleteJob={this.handleDeleteJob} close={this.handleCloseModal} title="Cảnh báo" content="Bạn có chắc chắn muốn xóa công việc này ??"/>) : (<div className='importan'>
            <h2 className='title'>Danh sách công việc</h2>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nhập tên công việc" value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleCreateJob}>Thêm</button>
              </div>
              <div className="list-group" id="add">
                {jobs.map((job) => (<label className="list-group-item" key={job.id}>
                    <div className='lable-content'>
                      <input className="form-check-input me-1" type="checkbox" value="" checked={job.status} onChange={() => this.handleToggleJobStatus(job.id)}/>
                      <span style={{ textDecoration: job.status ? "line-through" : "none" }}>{job.name}</span>
                    </div>
                      <div className="icons" onClick={() => this.handleEditJob()} style={{ cursor: 'pointer' }}>
                        <i className="fa-solid fa-pen"></i>
                        <i className="fa-solid fa-trash" onClick={() => this.handleClick(job.id)} style={{ cursor: 'pointer' }}></i>
                    </div>
                  </label>))}
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">Công việc đã hoàn thành :
              <span>0</span> /
              <span>4</span>
              </span>
            </div>
            {/* <input type="text" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})}/>
                <button onClick={this.handleCreateJob}>Thêm</button>
                <ul>
                  <li>Quét nhà</li>
                  <li>Rửa bát</li>
                </ul> */}
          </div>)}
        {/* <button onClick={this.handleClick}>Mở modal</button> */}
      </>);
    }
}
exports.default = App;
