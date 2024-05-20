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
import React, { Component } from 'react';
import Bai11 from './components/Bai11';
type Props = {};

type State = {
  show: boolean;
  inputValue: string;
  jobs: Job[];
  deleteJobId: any;
};
type Job = {
  id: number;
  name: string;
  status: boolean;
}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      show: false,
      inputValue: "",
      jobs: [],
      deleteJobId: null
    };
  }
  componentDidMount(): void {
      const jobLocal = localStorage.getItem("jobs");
      this.setState({
        jobs: jobLocal ? JSON.parse(jobLocal) : [],
      })
      
  }
  // hàm mở modal
  handleClick = (deleteJobId: number) => {
    this.setState({ show: true, deleteJobId});
  };
  handleCloseModal = () => {
    this.setState({
      show: false,
      deleteJobId: null
    });
  };
  // Hàm xóa công việc
  handleDeleteJob = () => {
    const { deleteJobId, jobs } = this.state;
    const updatedJobs = jobs.filter(job => job.id !== deleteJobId);
    this.setState({ jobs: updatedJobs, show: false, deleteJobId: null });
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };
  // Hàm thêm công việc
  handleCreateJob = () => {
    // validate dữ liệu đầu vào
    if(!this.state.inputValue){
      alert("Vui lòng nhập tên công việc")
    }else{
      const job: Job = {
        id: Math.ceil(Math.random()*10000),
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
      })

    }
  }
  // Cập nhật trạng thái công việc
  handleToggleJobStatus = (jobId: number) => {
    const { jobs } = this.state;
    const updatedJobs = jobs.map(job => {
      if (job.id === jobId) {
        return {
          ...job,
          status: !job.status
        };
      }
      return job;
    });
    this.setState({ jobs: updatedJobs });
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };
  handleEditJob=()=> {

  }
  render() {
    const {jobs} = this.state
    return (
      <>
        {this.state.show === true ? (
          <Bai11
            deleteJob={this.handleDeleteJob}
            close={this.handleCloseModal}
            title="Cảnh báo"
            content="Bạn có chắc chắn muốn xóa công việc này ??"
          />
        ) : (
          <div className='importan'>
            <h2 className='title'>Danh sách công việc</h2>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nhập tên công việc" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleCreateJob}>Thêm</button>
              </div>
              <div className="list-group" id="add">
                {jobs.map((job) => (
                  <label className="list-group-item" key={job.id}>
                    <div className='lable-content'>
                      <input className="form-check-input me-1" type="checkbox" value="" checked={job.status} onChange={() => this.handleToggleJobStatus(job.id)}/>
                      <span style={{textDecoration: job.status ? "line-through" : "none"}}>{job.name}</span>
                    </div>
                      <div className="icons" onClick={() => this.handleEditJob()} style={{cursor: 'pointer'}}>
                        <i className="fa-solid fa-pen"></i>
                        <i className="fa-solid fa-trash" onClick={() => this.handleClick(job.id)} style={{cursor: 'pointer'}}></i>
                    </div>
                  </label>
                ))}
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
          </div>
        )}
        {/* <button onClick={this.handleClick}>Mở modal</button> */}
      </>
    );
  }
}
