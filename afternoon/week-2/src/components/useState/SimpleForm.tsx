import { useState } from "react";

/*
Requirements:
- Create inputs for:
  - Name
  - Email
- Store values using state (controlled inputs)
- On submit:
  - Prevent page reload
  - Display submitted values or success message
- Clear form after submission
*/

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false); 

  function handleSubmit(event:any) {
    event.preventDefault();
    setSubmit(true)
    setName("")
    setEmail("")
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          required
        />
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>{submit ? name : ""}</p>
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
    </div>
  );
}
