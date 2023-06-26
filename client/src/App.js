import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import CourseScreen from "./screens/CourseScreen";
import Popup from "./components/Popup";

function App() {
  
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseScreen/>} />
        <Route path="/popup" element={<Popup expand={true} cardNo={3}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
