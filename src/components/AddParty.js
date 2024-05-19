import {useEffect, useState} from "react";
import AdminNav from "./AdminNav";

function AddParty(props){
    
    const [PartyName,setPartyName]=useState("");
    const [CandidateName,setCandidateName]=useState("");
    const [Symbol,setSymbol]=useState("");
    const [Image,setImage]=useState("");

   useEffect(()=>{
    setPartyName(props.PartyNameValue);
    setCandidateName(props.CandidateNameValue);
    setSymbol(props.SymbolValue);
    setImage(props.ImageValue);
   },[props.PartyNameValue,props.CandidateNameValue,props.SymbolValue,props.ImageValue])

   const arr=[PartyName,CandidateName,Symbol,Image];

   const handleClick=()=>{
    props.getState(arr);
   }

    return(
        <div>
            <AdminNav/>
        <div style={{maxWidth:"50%",margin:"0px auto",textAlign:"center"}}>
            <table class="table table-borderless caption-top" >
                <caption class="h3 text-center">Enter Party's Data</caption>
                <tbody>
                    <tr>
                        <td>Party Name</td>
                        <td><input value={PartyName} onChange={(event)=>setPartyName(event.target.value)} style={{boxSizing:"border-box"}} class="form-control input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Candidate Name</td>
                        <td><input value={CandidateName} onChange={(event)=>setCandidateName(event.target.value)} class="form-control input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Symbol Url</td>
                        <td><input value={Symbol} onChange={(event)=>setSymbol(event.target.value)} class="form-control input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Image Url</td>
                        <td><input value={Image} onChange={(event)=>setImage(event.target.value)} class="form-control input-lg"/></td>
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
export default AddParty;