import {  useState } from "react";
import AddParty from "./AddParty";
import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
function CreateParty(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const navigate = useNavigate();
    const [arr,setArr]=useState([]);
    const getState=(ChildData)=>{
        setArr(ChildData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data_to_be_added={PartyName:arr[0],CandidateName:arr[1],Symbol:arr[2],Image:arr[3]};
        
                Axios.post("https://onlinevotingappbackend.onrender.com/PartiesRoute/AddParty",data_to_be_added)
                .then((res)=>{
                    if(res.status===200) {
                        alert("record added successfully");
                        navigate("/Admin/PartyList/"+id);
                    }
                    else Promise.reject();
                })
                .catch((err)=>alert(err));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <AddParty getState={getState}
                    PartyNameValue=""
                    CandidateNameValue=""
                    SymbolValue=""
                    ImageValue=""
                >Add the Party Data</AddParty>
            </form>
        </div>
    )
}
export default CreateParty;