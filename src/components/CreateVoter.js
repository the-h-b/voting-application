import {  useState } from "react";
import AddVoter from "./AddVoter";
import Axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";
function CreateVoter(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const navigate=useNavigate();
    const [arr,setArr]=useState([]);
    const getState=(ChildData)=>{
        setArr(ChildData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data_to_be_added={name:arr[0],Id:arr[1],PhoneNumber:arr[2],Address:arr[3],DateOfBirth:arr[4],Gender:arr[5]};


        //Checking Whether the Id is already Present in the Data

        const url = 'https://onlinevotingappbackend.onrender.com/VoterListRoute';
        const idToCheck = data_to_be_added.Id; 
        if(!idToCheck.trim()){
            alert("Id must have Value")
        }
        else{
        fetch(url)
        .then(response => response.json())
        .then(data => {
        
        
          if (Array.isArray(data)) {
            const foundPerson = data.find(person => person.Id === idToCheck);
            if (foundPerson) {
              alert(`ID ${idToCheck} is already present in the data.`);
            } else {
                Axios.post("https://online-voting-app-backend.onrender.com/VoterListRoute/AddVoter",data_to_be_added)
                .then((res)=>{
                    if(res.status===200) {
                        alert("record added successfully");
                        navigate("/Admin/VoterList/"+id)
                    }
                    else Promise.reject();
                })
                .catch((err)=>alert(err));
            }
          } else {
            console.log('The data structure is not as expected.');
          }
        })
        .catch(error => {
          return error
        });
    }
      
      
      
      
      
      
        
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <AddVoter getState={getState}
                    nameValue=""
                    IdValue=""
                    PhoneNumberValue=""
                    AddressValue=""
                    DateOfBirthValue=""
                    GenderValue=""
                >Add the Voter Data</AddVoter>
            </form>
        </div>
    )
}
export default CreateVoter;