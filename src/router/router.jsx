import { Routes, Route } from "react-router-dom";
import Notes from "../pages/Notes";
import Trashnotes from "../pages/Trash";
import Setting from "../pages/Setting.jsx";
import Help from "../pages/Help.jsx";


function Routers() {
  return (
  
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/trashnotes" element={<Trashnotes/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/help" element={<Help/>} />
      </Routes>
 
  );
}

export default Routers;
