const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
require("./db/connection");           // database connection
app.use(cors());
app.use(express.json());





// Admin Routes

const Adminroutes=require("./routes/Adminroutes/adminRouter");
app.use("/admin/api",Adminroutes);


// Productcategory Routes

const ProductRoutes=require("./routes/product/productRouter")
app.use("/product/api",ProductRoutes)


// user Routes

const userRoutes=require("./routes/Userroutes/userRouters");
app.use("/user/api",userRoutes);

app.get("/",(req,res)=>{
    res.send('server is listening');
})


// Cart Routes

const cartRouters=require("./routes/Cartroutes/cartRouters");
app.use("/cart/api",cartRouters);


app.listen(4000,()=>{
    console.log("server is start");
})