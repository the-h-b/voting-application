import Axios from "axios";
import { useEffect, useState } from "react";
import VoterListRow from './VoterListRow';
import { Link, useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";
function VotersList(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://onlinevotingappbackend.onrender.com/VoterListRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <VoterListRow  obj={val}/>
        })
    }

    return(
        <div>
            <AdminNav/>
            <Link to={"/Admin/AddVoter/"+id}><button class="mx-5 mt-5 btn " style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Add Voter</button></Link>
    <div style={{overflowX:"auto"}}>
            <table  class="container table table-bordered mt-3">
            <thead class="table-info ">
                <tr>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Name</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Id</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Phone Number</th>
                    
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Address</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Date of Birth</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Gender</th>
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
export default VotersList;
