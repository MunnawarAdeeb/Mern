import axios from "axios";
import { useEffect, useState } from "react";
const APP=()=>{
  const [college,setCollege]=useState([{title:"",description:""}]);
  useEffect(()=>{
    axios.get("http://localhost:3001/").then((res)=>{setCollege(res.data)}).catch((error)=>{console.log(error)})
},[])
console.log(college);
return(<>hELLO</>)
}
export default APP;