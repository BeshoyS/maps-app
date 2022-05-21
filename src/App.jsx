import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";

function App() {
  return <div className="app">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/info" element={<Info/>}/>
    </Routes>
  </div>;
}

export default App;
