import { useState, useEffect } from "react";

/*
Requirements:
- Fetch data from: https://randomuser.me/api/?results=10
- Run fetch when component mounts
- Display:
  - Name
  - Email
  - Profile picture
- Add a "Refresh User" button (optional)
*/

// get, post, update/patch, delete
// get - gets,grabs data
// post - add, create
// update/patch - change, partial change
// delete - delete

// body: {}, params, query

// server.get("api", async (req, res) => {
//    const data = db.get("users");
//    if (!data) {
//      res.status(403).send({ msg: "No user data found "})
//    }
//
//   res.status(200).send({ results: userData, info: {} });
// });

// At what point is data, undefined
// very beginning, on mount

export default function RandomUser() {
  const [data, setData] = useState([]);
  const url = "https://randomuser.me/api?results=10";

  function fetchData() {
    try {
      fetch(url) // some time
        .then((response) => response.json()) //
        .then(({ results }) => setData(results)); //
    } catch (err: any) {
      throw new Error(err);
    }
  }

  useEffect(() => {
    fetchData(); // fetchData is called
  }, []);

  return <div></div>;
}
