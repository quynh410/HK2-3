export default function Register() {
  return (
    <>
    <div className="border-solid border-2 border-gray-700 w-[850px] flex gap-[20px] mt-[20px] rounded font-mono ml-[100px]">
      <div>
        <img
          src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg"
          alt=""
          className="w-[400px] h-[500px]"
        />
      </div>
      <div className="">
        <h2 className="font-extrabold uppercase text-[30px] mr-[60px]">
          Login
        </h2>
        <label htmlFor="">E-Mail</label> <br />
        <input
          className="border-2 border-zinc-600 rounded-[5px] w-[25pc] h-[40px]"
          type="text"
          placeholder="Placeholder conten"
        />{" "}
        <br /> <br />
        <label htmlFor="">Password</label> <br />
        <input
          className="border-2 border-zinc-600 rounded-[5px]  w-[25pc] h-[40px]"
          type="text"
          placeholder="Placeholder conten"
        />{" "}
        <br /> <br />
        <b className="ml-[17pc]">Forgot password?</b> <br /> <br />
        <button className="bg-blue-600 border-none border-zinc-600 rounded text-white w-[400px] h-[40px]">
          Login{" "}
        </button>
        <div className="flex items-center justify-center my-8">
          <hr className="flex-grow border-t border-gray-400" />
          <span className="mx-4 font-bold text-gray-400">Or</span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        <button className="bg-white border-2 border-gray-800 w-[400px] h-[40px] rounded text-center text-gray-500 ">
          Register now
        </button>
      </div>
    </div>
    </>
  );
}
