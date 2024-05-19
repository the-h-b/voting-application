import { useNavigate, useParams } from "react-router-dom";
import AddVoter from "./AddVoter";
import { useEffect, useState } from "react";
import Axios  from "axios";

function EditVoter()
{
    const navigate=useNavigate();
    const {id} = useParams();
    const [initialValue, setInitialValue] = useState({name:"",Id:"",PhoneNumber:"",Address:"",DateOfBirth:"",Gender:""});
    const [newData,setNewData] = useState([]);
    useEffect(()=>{
        Axios.get("https://onlinevotingappbackend.onrender.com/VoterListRoute/update-Voter/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,Id,PhoneNumber,Address,DateOfBirth,Gender} = res.data;
                setInitialValue({name,Id,PhoneNumber,Address,DateOfBirth,Gender});
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
        const data = {name:newData[0],Id:newData[1],PhoneNumber:newData[2],Address:newData[3],DateOfBirth:newData[4],Gender:newData[5]};
        Axios.put("https://online-voting-app-backend.onrender.com/VoterListRoute/update-Voter/"+id,data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record updated successfully")
                navigate("/Admin/VoterList/"+id);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <AddVoter getState={getState}
                        nameValue={initialValue.name}
                        IdValue={initialValue.Id}
                        PhoneNumberValue={initialValue.PhoneNumber}
                        AddressValue={initialValue.Address}
                        DateOfBirthValue={initialValue.DateOfBirth}
                        GenderValue={initialValue.Gender}
                        >
                        Update Voter's Data
                        </AddVoter>
        </form>
    )
}
export default EditVoter;
