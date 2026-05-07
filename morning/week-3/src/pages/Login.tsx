import { useState } from "react";
import { Link } from 'react-router-dom';

/**
 * Check against hardcoded login values
 * Error handling if email, password is incorrect
 * Check if a field is empty, if empty display an error message under input
 */

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleLogin(e: any) {
    e.preventDefault;

    const storedUsers = localStorage.getItem("users") || null;
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const foundUser = users.find(
        (user:any) => 
            user.username === username &&
            user.password === password
        )
        
    foundUser ? setError(false) : setError(true);
  }
  
  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
