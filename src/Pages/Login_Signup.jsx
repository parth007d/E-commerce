import React, { useState } from "react";

const Login_Signup = () => {
  const [Data, setData] = useState("Login");

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const ChangeHandler = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(formdata);
    alert("Data Added Sucesfully");
    setformdata({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="p-4 flex justify-center">
        <form
          className="w-max border border-black rounded-[15px] p-4"
          onSubmit={SubmitHandler}
        >
          {Data === "Signup" ? <h1>SignUp Here</h1> : <h1>Login Here</h1>}
          {Data === "Signup" && (
            <div className="flex flex-col p-4">
              <label htmlFor="name" className="text-[1.5rem]">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={ChangeHandler}
                className="w-full h-[2rem] border border-gray-400 outline-none pl-2"
                required
              />
            </div>
          )}

          <div className="flex flex-col p-4">
            <label htmlFor="email" className="text-[1.5rem]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={ChangeHandler}
              className="w-full h-[2rem] border border-gray-400 outline-none pl-2"
              required
            />
          </div>
          <div className="flex flex-col p-4">
            <label htmlFor="password" className="text-[1.5rem]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={ChangeHandler}
              className="w-full h-[2rem] border border-gray-400 outline-none pl-2"
              required
            />
          </div>
          {Data === "Signup" ? (
            <h1
              className="cursor-pointer text-blue-400 border-b border-blue-400 w-max"
              onClick={() => setData("Login")}
              c
            >
              SignUp here
            </h1>
          ) : (
            <h1
              className="cursor-pointer text-blue-400 border-b border-blue-400 w-max"
              onClick={() => setData("Signup")}
            >
              Login here
            </h1>
          )}

          <div className="flex justify-center">
            <button className="w-[12rem] h-[2rem] bg-orange-400">Sumbit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login_Signup;
