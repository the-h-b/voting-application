import Axios from "axios";
import { useEffect, useState } from "react";
import IsVotedListRow from './IsVotedListRow';
import AdminNav from "./AdminNav";
function IsVotedList(){
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://onlinevotingappbackend.onrender.com/IsVotedRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <IsVotedListRow obj={val}/>
        })
    }

    return(
        <div>
            <AdminNav/>
            <div class="container col-md-6">
            <table  class="table table-bordered mt-3" >
        
            <thead class="table-info" >
                <tr>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Id</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Party Voted</th>
                    <th class="text-center" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Delete</th>
                </tr>
            </thead>
            <tbody className="">
                {ListItems()}
            </tbody>
            
        </table>
            </div>
            
        </div>
        
    )
}
export default IsVotedList;