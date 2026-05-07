import { useState, useEffect } from "react";
import { History } from "../constants/History";




function Dashboard() {
  const userInfoSub = {username: "SociallyAkward", userId:"a91c2f44-12d8-4e31-b7a4-3f7d8f22c001"}
  const historyFile = History
  const [history, setHistory] = useState([]);
  const local = localStorage.getItem("userInfo") 
  const userInfo = local ? JSON.parse(local) : userInfoSub;
  


  useEffect(()=> {
    const userHistory:any = historyFile.filter((match) => match.users_id === userInfo.userId);
    if (userHistory !== null) {
      setHistory(userHistory)
    }
  },[])

  return (
    <div className="w-screen h-screen flex justify-evenly">
      <div
        id="historyContainer"
        className="flex flex-col h-screen mt-5 mb-5 border-2 border-solid border-gray-700">
        {history.length === 0 ? (<h1 className="text-white">No History Yet.</h1>) : (history.map((match:any) => (<p className="text-white">Character:{match.character_id} Result: {match.match_results}</p>)))}
      </div>

      <div id="playContainer" className="flex h-screen mt-5 mb-5 items-center justify-center">
        <div>
          <ul id="characterSelect"></ul>
          <button id="playBtn" className="h-20 w-20 rounded-sm">Play</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
