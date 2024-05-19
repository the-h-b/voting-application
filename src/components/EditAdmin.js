import { useNavigate, useParams } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import { useEffect, useState } from "react";
import Axios  from "axios";

function EditAdmin()
{
    const navigate=useNavigate();
    const {id} = useParams();
    const [initialValue, setInitialValue] = useState({name:"",username:"",phonenumber:"",email:"",address:"",password:""});
    const [newData,setNewData] = useState([]);
    useEffect(()=>{
        Axios.get("https://onlinevotingappbackend.onrender.com/AdminsRoute/update-Admin/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,username,phonenumber,email,address,password} = res.data;
                setInitialValue({name,username,phonenumber,email,address,password});
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
        const data = {name:newData[0],username:newData[1],phonenumber:newData[2],email:newData[3],address:newData[4],password:newData[5]};
        Axios.put("https://online-voting-app-backend.onrender.com/AdminsRoute/update-Admin/"+id,data)
        .then((res)=>{
            if(res.status === 200 && id === "654718d311503067da7ec963"){
                alert("Record updated successfully")
                    navigate("/Admin/AdminsList/"+id)
            }
            else if(res.status === 200 ){
                alert("Record updated successfully")
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <AddAdmin getState={getState}
                        nameValue={initialValue.name}
                        usernameValue={initialValue.username}
                        phonenumberValue={initialValue.phonenumber}
                        emailValue={initialValue.email}
                        addressValue={initialValue.address}
                        passwordValue={initialValue.password}
                        >
                        Update  Data
                        </AddAdmin>
        </form>
    )
}
export default EditAdmin;
