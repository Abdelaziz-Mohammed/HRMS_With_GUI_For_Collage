import { BrowserRouter, Routes, Route } from "react-router-dom"
import Employee from "./Pages/Employee";
import Add from "./Pages/Add";
import Update from "./Pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
