import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="h-screen min-w-80% flex items-center justify-center ml-3 mr-3">
      <div className="border-emerald-600 w-[25rem] py-10  rounded-xl border-2 flex flex-col items-center justify-center">
        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            required
            className=" text-xl w-80 py-3 px-5 bg-transparent outline-none border-2 border-emerald-600 rounded-full"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter password"
            required
            className=" mt-3 text-xl w-80 py-3 px-5 bg-transparent outline-none border-2 border-emerald-600 rounded-full"
          />
          <button className="text-white w-80 text-xl py-3 px-5 mt-6 outline-none bg-emerald-600 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
