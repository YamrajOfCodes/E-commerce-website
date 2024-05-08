import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layouts';
import Home from './Pages/Home/Home';
import {Routes,Route} from "react-router-dom"
import Productpage from './Pages/Productmainpage/Productpage';
import ProductDisplay from './Pages/productdisplaypage/ProductDisplay';
import Cartmain from './Components/Cart/Cartmain';
import Userprofile from './Pages/Userprofile/Userprofile';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Shipping from './Pages/Shipping/Shipping';
import Checkout from './Pages/Checkoutpage/Checkout';
import Order from './Pages/orders/Order';
import Adminlogin from './Pages/Adminlogin/Adminlogin';
import Commonlayout from './Pages/Admin/Commonlayout';
import Admindashboard from './Pages/Admin/Admindashboard';
import Adminproductss from './Pages/Admin/Adminproductss';
import Addproduct from './Pages/Admin/Addproduct';
import Addcategory from './Pages/Admin/Addcategory';
import Orders from './Pages/Admin/Orders';
import toast, { Toaster } from 'react-hot-toast';
import Payment from './Pages/Payemnts/Payment';
import UserprotectedRoutes from './Components/Protected/UserprotectedRoutes';
import AdminprotectedRoutes from './Components/Protected/AdminprotectedRoutes';
function App() {
  return (
    <div className="App">
  
        <Routes>

               {/* Admin routes */}

               <Route path='/admin/login' element={<Layout><Adminlogin/></Layout>}/>
               <Route path='/admin/dashboared' element={<Commonlayout><AdminprotectedRoutes components={<Admindashboard/>}/></Commonlayout>}/>
               <Route path='/admin/products' element={<Commonlayout><AdminprotectedRoutes components={<Adminproductss/>}/></Commonlayout>}/>
               <Route path='/admin/addproduct' element={<Commonlayout><AdminprotectedRoutes components={<Addproduct/>}/></Commonlayout>}/>
               <Route path='/admin/addcategory' element={<Commonlayout><AdminprotectedRoutes components={<Addcategory/>}/></Commonlayout>}/>
               <Route path='/admin/orders' element={<Commonlayout><AdminprotectedRoutes components={<Orders/>}/></Commonlayout>}/>




            {/* user Rotes */}
  
          <Route path='/' element={  <Layout><Home/> </Layout>}/>
          <Route path='/product' element={ <Layout><Productpage/></Layout>}/>
          <Route path='/productdisplay/:Id' element={ <Layout><ProductDisplay/></Layout>}/>
          <Route path='/cart' element={<Layout>  <UserprotectedRoutes components={<Cartmain/>}/></Layout>} />
          <Route path='/userprofile' element={ <Layout><UserprotectedRoutes components={<Userprofile/>}/></Layout>}/>
          <Route path='/login' element={ <Layout><Login/></Layout>}/>
          <Route path='/register' element={<Layout><Register/></Layout>}/>
          <Route path='/shipping' element={ <Layout><UserprotectedRoutes components={<Shipping/>}/></Layout>}/>
          <Route path='/checkout' element={ <Layout><UserprotectedRoutes components={<Checkout/>}/></Layout>}/>
          <Route path='/payments' element={ <Layout><UserprotectedRoutes components={<Payment/>}/></Layout>}/>
          <Route path='/orders' element={ <Layout><UserprotectedRoutes components={<Orders/>}/></Layout>}/>
        </Routes>
        <Toaster />
        
    </div>
  );
}

export default App;
