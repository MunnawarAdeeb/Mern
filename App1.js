import { Routes,Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import axios from "axios";
import { useEffect, useState } from "react";
const DATABASE_URL="mongodb+srv://munnawar:powerofs@cluster0.wvli9ud.mongodb.net/college?retryWrites=true&w=majority";
const App1=()=>{
    const [data1,setData1]=useState(null);
    useEffect(()=>{
        axios.get(DATABASE_URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then((res)=>{setData1(res.data)}).catch((error)=>{console.log(error)})
    },[])
    console.log(data1)
    return(<>
     <Header/>
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
   </>)
}
export default App1;