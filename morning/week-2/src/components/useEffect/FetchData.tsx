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

type UserType = {
  name: {
    first: string;
  };
  email: string;
  picture: 
    thumbnail: string;
}

export default function RandomUser() {
  const [users, setUser] = useState<UserType[]>([]);

  useEffect(() => {
    try {
      const data = axios.get("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((data) => setUser(data.results));


        if (!data) return;

      const formattedUsers = data?.map((user) => {return { name: user.name.first, email: user.email, }})
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {users.map((user: any, index: any) => {
        return (
          <div key={index}>
            <h2>{user && user.name?.first}</h2>
            <p>{user && user.email}</p>
            <img src={user && user.picture.thumbnail}/>
          </div>
        );
      })}
    </div>
  );
}
