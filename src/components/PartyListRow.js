import Axios from "axios";
import {Link} from "react-router-dom";
function PartyListRow(props)
{
    const {_id,PartyName,CandidateName,Symbol,Image} = props.obj; //Object destruction
    const handleClick = () =>{
        Axios.delete("https://onlinevotingappbackend.onrender.com/PartiesRoute/delete-Party/" + _id )
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
      }
    return (
        <div className="col-md-4 col-lg-3" style={{ marginBottom: "20px" }}>
          <div className="card">
            <div class="row justify-content-center">
              <img src={Symbol} className="mt-3 card-img-top" alt="Party Logo" style={{ height: "20vh", width:"20vh"}} />
              <img src={Image} className="mt-3 card-img-top" alt="Party img" style={{ height: "20vh", width:"20vh" }} />
            </div>
            
            <div className="card-body">
              <h5 className="card-title">Party Name : {PartyName}</h5>
              <p className="card-text">Candidate  Name: {CandidateName}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link to={"/Admin/EditParty/" + _id} className="btn btn-success">Edit</Link>
              <button onClick={handleClick} className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      );
}
export default PartyListRow;

