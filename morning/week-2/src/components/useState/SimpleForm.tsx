import { useState } from "react";

/*
Requirements:
- Create inputs for:
  - Name
  - Email
- Store values using state (controlled inputs)
- On submit:
  - Prevent page reload
  - Display submitted values or conditional success message
- Clear form after submission
*/

type ContactForm = {
  setterFunction: (name: string) => void;
};

export default function ContactForm({ setterFunction }: ContactForm) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false); // boolean

  function handleSubmit(e: any) {
    e.preventDefault();
    setterFunction(name);
    setSuccess(true);
  }

  return (
    <div>
      <form>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>

      <p>Name: {name}</p>
      <p>Email: {email}</p>

      <p>
        {success
          ? "Successfully sent message"
          : "An error occurred when sending your message"}
      </p>
    </div>
  );
}
