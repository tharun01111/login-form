import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const submitForm = (e) => {
    e.preventDefault();
    if (!form.email || !form.password)
      return alert("Enter all the credentials..");
    setForm({ email: "", password: "" });
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={submitForm}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          placeholder="Enter Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label>Password</label>
        <input
          placeholder="Enter Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;