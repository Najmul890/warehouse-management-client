import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/FirebaseAuthentication/Login/Login";
import Register from "./Pages/FirebaseAuthentication/Register/Register";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import 'react-toastify/dist/ReactToastify.css';
import Inventory from "./Pages/Inventory/Inventory";
import RequireAuth from "./Pages/FirebaseAuthentication/RequireAuth/RequireAuth";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import NotFound from "./Pages/NotFound/NotFound";
import AddInventory from "./Pages/AddInventory/AddInventory";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import MyProducts from "./Pages/MyProducts/MyProducts";
import './App.css';
import Footer from "./Pages/Shared/Footer/Footer";


function App() {
  return (
    <div className="App" >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/manageInventories" element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path="/addInventory" element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path="/myProducts" element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

