import Axios from "axios";
import { useEffect, useState } from "react";
import PartyListRow from './PartyListRow';
import { Link, useLocation } from "react-router-dom";
import AdminNav from './AdminNav'
function PartyList(props){
  const location = useLocation();
    var id = location.pathname.split("/").pop();
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://onlinevotingappbackend.onrender.com/PartiesRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    return (
      <div>

      <AdminNav/>
      <div class="my-5 mx-5">
        
        <Link to={"/Admin/AddParty/"+id}><button class="btn" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Add Party</button></Link>
        <div class="container mt-3">
          <div className="row ">
          {arr.map((val,ind) => (
            <PartyListRow obj={val} />
          ))}
        </div>
        </div>
        
      </div>
      </div>
      )
    
}
export default PartyList;