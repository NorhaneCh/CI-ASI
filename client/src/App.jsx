import { Routes, Route, Navigate } from "react-router-dom";
import Home  from "./components/Home";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </div>
  )
}

export default App
