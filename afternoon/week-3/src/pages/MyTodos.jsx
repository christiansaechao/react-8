import React from "react";

export const Login = () => {
  // const [todos, setTodos] = useState();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();


  // get, delete

  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username,
        password
      }
    }
    
    // GET REQUEST
    const response = fetch("soons.server/login", options);

    setUser(response);
  }, []);

  return (
    <div>
      Login Page
      <input value={password} />
      <input value={username} />
    </div>
  );
};

function TodoPage({ username, password }) {

  return (
    <div>
      {username}
      {password}
    </div>
  )
}
