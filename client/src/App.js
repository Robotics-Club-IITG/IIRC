import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import CourseScreen from "./screens/CourseScreen";

function App() {
  
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseScreen/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
