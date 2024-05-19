import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import AdminNav from "./AdminNav";
import axios from "axios";
import p1 from '../images/voterlist.jpg'
import p2 from '../images/partieslist.jpg'
import p3 from '../images/votedlist.jpg'
import p4 from '../images/results.jpg'
import p5 from '../images/profile.jpg'
import p6 from '../images/admin.jpg'
function AdminHome() {
    const location = useLocation();
    var id = location.pathname.split("/").pop();
  const [votersCount, setVotersCount] = useState(0);
  const [partiesCount, setPartiesCount] = useState(0);
  const [isvotedCount, setisvotedCount] = useState(0);

  useEffect(() => {
    // Fetch voters count
    axios.get("https://onlinevotingappbackend.onrender.com/VoterListRoute/Voters-count")
      .then((response) => {
        const count = response.data.count;
        setVotersCount(count);
        console.log(`Total voters count: ${count}`);
      })
      .catch((error) => {
        console.error("Error fetching voters count:", error);
      });

    axios.get("https://onlinevotingappbackend.onrender.com/IsVotedRoute/Isvoted-count")
      .then((response) => {
        const count = response.data.count;
        setisvotedCount(count);
        console.log(`Total voters count: ${count}`);
      })
      .catch((error) => {
        console.error("Error fetching voters count:", error);
      });

    // Fetch parties count
    axios.get("https://onlinevotingappbackend.onrender.com/PartiesRoute/Parties-count")
      .then((response) => {
        const count = response.data.count;
        setPartiesCount(count);
        console.log(`Total parties count: ${count}`);
      })
      .catch((error) => {
        console.error("Error fetching parties count:", error);
      });
  }, []); 
  const handleLogout=()=>{
        id=null;
        window.location.href=window.location.origin;
  }
    return(
        <div style={{background:"rgba(241, 224, 207, 0.8)"}}>

            
            {/* <AdminNav/> */}
            <div>&ensp;</div>
            <div className="d-flex align-items-end mt-2" style={{ display: "flex", justifyContent: "flex-end",marginRight:"20px" }}>
                <button className="btn " style={{backgroundColor:"rgba(212, 197, 185, 1)",color:"black"}} onClick={handleLogout}>Log out</button>
            </div>

            <div class="container mt-5">
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <img src={p1} style={{height:"300px"}} alt="voter-img" class="card-img-top"></img>
                            <h3 class="card-title text-center">Voters</h3>
                            <div class="card-body">
                                <p>Total Number of Voters : {votersCount}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <Link to={"/Admin/VoterList/"+id}><button class="btn" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Voters List</button></Link>
                                <Link to={"/Admin/AddVoter/"+id}><button class="btn " style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Add Voters</button></Link>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <img src={p2} style={{height:"300px"}} alt="voter-img" class="card-img-top"></img>
                            <h3 class="card-title text-center">Registered Parties</h3>
                            <div class="card-body">
                                <p>Number of Parties Participating : {partiesCount}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <Link to={"/Admin/PartyList/"+id}><button class="btn " style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Parties List</button></Link>
                                <Link to={"/Admin/AddParty/"+id}><button class="btn " style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Add Parties</button></Link>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <img src={p3} style={{height:"300px"}} alt="voter-img" class="card-img-top"></img>
                            <h3 class="card-title text-center">Voted List</h3>
                            <div class="card-body">
                            <p>Number of Voters already Voted : {isvotedCount}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-center">
                                <Link to={"/Admin/IsVotedList/"+id}><button class="btn" style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Voted List</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4  mb-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <img src={p4} style={{height:"300px"}} alt="voter-img" class="card-img-top"></img>
                            <div class="card-footer d-flex justify-content-center">
                                <Link to={"/Admin/Results/"+id}><button class="btn " style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Results</button></Link>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <img src={p5} style={{height:"300px"}} alt="profile-img" class="card-img-top"></img>
                            <div class="card-footer d-flex justify-content-center">
                                <Link to={"/Admin/Profile/"+id}><button class="btn " style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Profile</button></Link>
                            </div>
                        </div>
                        
                    </div>
                    {id === "654718d311503067da7ec963" && (<div class="col-lg-4 col-md-6">
                        <div class="card">
                            <img src={p6} style={{height:"300px"}} alt="profile-img" class="card-img-top"></img>
                            <div class="card-footer d-flex justify-content-center">
                                <Link to={"/Admin/AdminsList/"+id}><button class="btn " style={{backgroundColor:"rgba(241, 224, 207, 0.8)",color:"black"}}>Manage Admins</button></Link>
                            </div>
                        </div>
                        
                    </div>)}
                    
                    </div>
                    
                </div>
            </div>
            
        </div>


        
    )
}
export default AdminHome;