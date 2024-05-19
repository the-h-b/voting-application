import {useEffect, useState} from "react";
import AdminNav from "./AdminNav";

function AddVoter(props){
    const [name,setname]=useState("");
    const [Id,setId]=useState("");
    const [PhoneNumber,setPhoneNumber]=useState("");
    const [Address,setAddress]=useState("");
    const [DateOfBirth,setDateOfBirth]=useState("");
    const [Gender,setGender]=useState("");

   useEffect(()=>{
    setname(props.nameValue);
    setId(props.IdValue);
    setPhoneNumber(props.PhoneNumberValue);
    setAddress(props.AddressValue);
    setDateOfBirth(props.DateOfBirthValue);
    setGender(props.GenderValue);
   },[props.nameValue,props.IdValue,props.PhoneNumberValue,props.AddressValue,props.DateOfBirthValue,props.GenderValue])

   const arr=[name,Id,PhoneNumber,Address,DateOfBirth,Gender];

   const handleClick=()=>{
    props.getState(arr);
   }

    return(
        <div>
            <AdminNav/>
        <div style={{maxWidth:"50%",margin:"0px auto",textAlign:"center"}}>
            <table class="table table-borderless caption-top" >
                <caption class="h3 text-center">Enter Voter's Data</caption>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input value={name} onChange={(event)=>setname(event.target.value)} style={{boxSizing:"border-box"}} class="form-control input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Id</td>
                        <td><input value={Id} onChange={(event)=>setId(event.target.value)} class="form-control input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td><input value={PhoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)} class="form-control input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td><textarea value={Address} onChange={(event)=>setAddress(event.target.value)} class="form-control input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td><input value={DateOfBirth} onChange={(event)=>setDateOfBirth(event.target.value)} type="date" class="form-control input-sm"/></td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td style={{textAlign:"left"}}>
                            <label><input type="radio" name="Gender" value="Male" checked={Gender === "Male"} onChange={() => setGender("Male")}/> Male</label>  
                            &ensp; &ensp; &ensp;
                            <label><input type="radio" name="Gender"  value="Female" checked={Gender === "Female"} onChange={() => setGender("Female")}/> Female</label>
                        </td>
                    </tr>
                    <tr >
                        <td colSpan={"2"}><button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}
export default AddVoter;