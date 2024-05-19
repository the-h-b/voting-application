import Axios from "axios";
import { useEffect, useState } from "react";
import AdminListRow from './AdminListRow';
import { Link, useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";
function AdminsList(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://onlinevotingappbackend.onrender.com/AdminsRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <AdminListRow  obj={val}/>
        })
    }

    return(
        <div>
            <AdminNav/>
            <Link to={"/Admin/AddAdmin/"+id}><button class="mx-5 mt-5 btn " style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Add An Admin</button></Link>
    <div style={{overflowX:"auto"}}>
            <table  class="container table table-bordered mt-3">
            <thead class="table-info ">
                <tr>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Name</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>username</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Phone Number</th>
                    
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Email</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Address</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Password</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Delete / Edit</th>
                </tr>
            </thead>
            <tbody >
                {ListItems()}
            </tbody>
            
        </table>
    </div>
        </div>
        
    )
}
export default AdminsList;
