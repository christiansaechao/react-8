import { useState } from "react";

/**
 * Validate the fields
 * Error check if fields are empty, set eer
 *
 */

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    filledOut: "",
    passwordMatch: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();

    if (
      !email.trim() ||
      !username.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setErrors({ ...errors, filledOut: "Please fill out all fields" });
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ ...errors, passwordMatch: "Passwords do not match" });
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const newUser = {
      id: Math.floor(Math.random() * 1000000) + 1,
      username,
      email,
      password,
    };

    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));
  }
  return (
    <div  className="">
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <h2>{errors.filledOut !== "" && errors.filledOut}</h2>
      <h2>{errors.passwordMatch !== "" && errors.passwordMatch}</h2>
      <button type="submit" onClick={handleSubmit}>
        Signup
      </button>
    </div>
  );
}
