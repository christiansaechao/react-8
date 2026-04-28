import "./App.css";
import React from "react";
import { UserInfo } from "./components/UserInfo";

function App() {

  return (
    <>
      <UserInfo name="chris" occupation="Teacher" hobby="warzone" age="20" />
      <UserInfo name="Takoda" occupation="Baker" hobby="Rock Climbing" age={29} />
    </>
  );
}

export default App;