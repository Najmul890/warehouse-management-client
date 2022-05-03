import { Route, Routes } from "react-router-dom";
import Login from "./Pages/FirebaseAuthentication/Login/Login";
import Register from "./Pages/FirebaseAuthentication/Register/Register";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;

