"use client";
import React, { useState,useEffect, useCallback } from "react";


const containerStyle = {
  minHeight: 'calc(100vh - 148px)', // Calcola l'altezza sottraendo l'altezza dell'header e del footer dalla viewport height
  display: 'flex',
  alignItems: 'center', // Centra verticalmente il contenuto
  justifyContent: 'center', // Centra orizzontalmente il contenuto
};



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);


useEffect(() => {
  if (localStorage.getItem("logged")) {
    window.location.href = "/bucketlist";
  }
}, []);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    setTimeout(() => {
      if (email === "davidetrovato87@gmail.com" && password === "D@vide1987") {
        localStorage.setItem("logged", true);
        window.location.href = "/bucketlist";

      } else {
        setEmail("");
        setPassword("");
        setSending(false);
      }
    }, 1000);
  };


  return (
    <section
      id="contact"
      className="flex flex-col items-center py-24 relative bg-[#121212] h-full"
      style={containerStyle}
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6 w-[350px]">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Email"
            />
          </div>
          <div className="mb-6 w-[350px]">
            <label
              htmlFor="password"
              className="text-white block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={onChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            aria-label="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {sending ? "Sending..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
