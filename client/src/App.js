import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import CourseScreen from "./screens/CourseScreen";
import Popup from "./components/Popup";
import LeaderBoard from "./screens/LeaderBoard";

function App() {
  
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseScreen/>} />
        <Route path="/events" element={<CourseScreen/>} />
        <Route path="/leaderboard" element={< LeaderBoard />} />
        <Route path="/about" element={<Popup expand={true} cardNo={5}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
