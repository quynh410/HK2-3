import axios from "axios";
import React, { useEffect, useState } from "react";

interface Jobs {
  id: number;
  name: string;
  status: boolean;
  completed: boolean; 
}

export default function TodoList() {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [newJobName, setNewJobName] = useState<string>("");
  const [editingJob, setEditingJob] = useState<{ id: number; name: string } | null>(null);
  const [filter, setFilter] = useState<string>("all"); 

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios
      .get("http://localhost:8080/jobs")
      .then((response) => {
        setJobs(response.data.map((job: Jobs) => ({ ...job, completed: false }))); 
      })
      .catch((err) => console.log(err));
  };

  const addJob = () => {
    if (newJobName.trim() === "") {
      alert("Vui lòng nhập tên công việc.");
      return;
    }

    if (editingJob) {
      axios
        .put(`http://localhost:8080/jobs/${editingJob.id}`, { name: newJobName })
        .then(() => {
          const updatedJobs = jobs.map((job) =>
            job.id === editingJob.id ? { ...job, name: newJobName } : job
          );
          setJobs(updatedJobs);
          setNewJobName("");
          setEditingJob(null);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:8080/jobs", { name: newJobName, status: false })
        .then((response) => {
          setJobs([...jobs, { ...response.data, completed: false }]);
          setNewJobName("");
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteJob = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa công việc này?")) {
      axios
        .delete(`http://localhost:8080/jobs/${id}`)
        .then(() => {
          setJobs(jobs.filter((job) => job.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteCompletedJobs = () => {
    if (window.confirm("Bạn có chắc muốn xóa các công việc đã hoàn thành?")) {
      const completedJobIds = jobs.filter((job) => job.completed).map((job) => job.id);
      setJobs(jobs.filter((job) => !job.completed));
      axios
        .delete(`http://localhost:8080/jobs`, {
          data: { ids: completedJobIds }, 
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteAllJobs = () => {
    if (window.confirm("Bạn có chắc muốn xóa tất cả công việc?")) {
      const jobIds = jobs.map((job) => job.id);

      setJobs([]);

      axios
        .delete(`http://localhost:8080/jobs`, {
          data: { ids: jobIds }, 
        })
        .catch((err) => console.log(err));
    }
  };

  const startEditing = (job: Jobs) => {
    setEditingJob({ id: job.id, name: job.name });
    setNewJobName(job.name);
  };

  const toggleCompletion = (id: number) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, completed: !job.completed } : job
    );
    setJobs(updatedJobs);
  };

  const filteredJobs = () => {
    switch (filter) {
      case "completed":
        return jobs.filter((job) => job.completed);
      case "inProgress":
        return jobs.filter((job) => !job.completed);
      case "all":
      default:
        return jobs;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-gray-400 w-[500px] h-[600px] text-center flex flex-col justify-between items-center rounded-lg shadow-inner">
        <div className="font-bold text-[30px] mt-2">Quản lí công việc</div>
        <div className="border-2 border-gray-300 p-2 flex flex-col items-center w-[450px] rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Nhập tên công việc"
            className="mb-2 p-2 border w-full rounded-lg shadow-sm"
            value={newJobName}
            onChange={(e) => setNewJobName(e.target.value)}
          />
          <button
            className="p-2 bg-blue-500 text-white w-full rounded-lg hover:bg-blue-700 shadow-md"
            onClick={addJob}
          >
            {editingJob ? "Lưu thay đổi" : "Thêm công việc"}
          </button>
        </div>
        <div className="border-2 border-gray-300 p-4 flex justify-around w-[450px] rounded-lg shadow-md">
          <button
            className={`p-2 text-black rounded-lg ${
              filter === "all" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            } border-2 border-gray-300 shadow-sm`}
            onClick={() => setFilter("all")}
          >
            Tất cả
          </button>
          <button
            className={`p-2 text-black rounded-lg ${
              filter === "completed" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            } border-2 border-gray-300 shadow-sm`}
            onClick={() => setFilter("completed")}
          >
            Hoàn Thành
          </button>
          <button
            className={`p-2 text-black rounded-lg ${
              filter === "inProgress" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            } border-2 border-gray-300 shadow-sm`}
            onClick={() => setFilter("inProgress")}
          >
            Đang thực hiện
          </button>
        </div>
        <ul className="p-2 w-[470px]">
          {filteredJobs().map((job) => (
            <li key={job.id} className="flex justify-between items-center mb-2 border-2 border-gray-300 p-2 rounded-lg shadow-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded-lg"
                  checked={job.completed}
                  onChange={() => toggleCompletion(job.id)}
                />
                <span style={{ textDecoration: job.completed ? "line-through" : "none" }}>{job.name}</span>
              </div>
              <div className="flex gap-[15px]">
                <button onClick={() => startEditing(job)}>
                  <i className="fa-solid fa-pen text-yellow-400"></i>
                </button>
                <button onClick={() => deleteJob(job.id)}>
                  <i className="fa-solid fa-trash text-red-500"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="p-4 flex justify-around w-[550px]">
          <button
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 shadow-md"
            onClick={deleteCompletedJobs}
          >
            Xóa công việc hoàn thành
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 w-[200px] shadow-md"
            onClick={deleteAllJobs}
          >
            Xóa tất cả công việc
          </button>
        </div>
      </div>
    </div>
  );
}
