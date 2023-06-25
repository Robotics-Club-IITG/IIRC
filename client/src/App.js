import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import CourseScreen from "./screens/CourseScreen";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
