import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs'
import Login from './Pages/Login/Login/Login';
import Products from './Pages/Products/Products/Products';
import AddInventory from './Pages/AddInventory/AddInventory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import CheckOut from './Pages/CheckOut/CheckOut';
import Register from './Pages/Login/Register/Register';
import app from './firebase.init';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import UpdateUser from './Pages/UpdateUser/UpdateUser';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/home' element = {<Home></Home>}></Route>
      <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
      <Route path='/product/:productId' element = {
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
      }></Route>
      <Route path='/addinventory' element = {
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
      }></Route>
      <Route path='/manage' element = {
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
      }></Route>
      <Route path='/chekout' element = {<CheckOut></CheckOut> }></Route>
      <Route path='/login' element = {<Login></Login>}></Route>
      <Route path='/register' element = {<Register></Register>}></Route>
      <Route path='/products' element = {<Products></Products>}></Route>
      <Route path='/inventory' element = {<AddInventory></AddInventory>}></Route>
      <Route path='*' element = {<NotFound></NotFound>}></Route>
      <Route path='/update/:id' element = {<UpdateUser></UpdateUser>}></Route>
     </Routes>
    </div>
  );
}

export default App;
