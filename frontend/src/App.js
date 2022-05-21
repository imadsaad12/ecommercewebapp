import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Home from "./components/Home/index"
function App() {
    
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/home" element={<Home />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
