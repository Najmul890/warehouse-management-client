import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/FirebaseAuthentication/Login/Login";
import Register from "./Pages/FirebaseAuthentication/Register/Register";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import 'react-toastify/dist/ReactToastify.css';
import Inventory from "./Pages/Inventory/Inventory";
import RequireAuth from "./Pages/FirebaseAuthentication/RequireAuth/RequireAuth";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

