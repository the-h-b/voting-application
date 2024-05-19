import { useParams } from "react-router-dom";
import AddParty from "./AddParty";
import { useEffect, useState } from "react";
import Axios  from "axios";
import { useNavigate } from "react-router-dom";
function EditParty()
{
    const navigate=useNavigate();
    const {id} = useParams();
    const [initialValue, setInitialValue] = useState({PartyName:"",CandidateName:"",Symbol:"",Image:""});
    const [newData,setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("https://onlinevotingappbackend.onrender.com/PartiesRoute/update-Party/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {PartyName,CandidateName,Symbol,Image} = res.data;
                setInitialValue({PartyName,CandidateName,Symbol,Image});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = {PartyName:newData[0],CandidateName:newData[1],Symbol:newData[2],Image:newData[3]};
        Axios.put("https://online-voting-app-backend.onrender.com/PartiesRoute/update-Party/"+id,data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record updated successfully")
                navigate("/Admin/PartyList/"+id);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <AddParty getState={getState}
                        PartyNameValue={initialValue.PartyName}
                        CandidateNameValue={initialValue.CandidateName}
                        SymbolValue={initialValue.Symbol}
                        ImageValue={initialValue.Image}
                       
                        >
                        Update Party's Data
                        </AddParty>
        </form>
    )
}
export default EditParty;
