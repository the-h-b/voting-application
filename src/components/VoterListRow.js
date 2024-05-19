import Axios from "axios";
import {Link} from "react-router-dom";
function VoterListRow(props)
{
    const {_id,name,Id,PhoneNumber,Address,DateOfBirth,Gender} = props.obj; //Object destruction
   
    const handleClick = () =>{
        Axios.delete("https://onlinevotingappbackend.onrender.com/VoterListRoute/delete-Voter/" + _id )
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
   
    return(
        <tr class="text-center">
            <td>{name}</td>
            <td>{Id}</td>
            <td>{PhoneNumber}</td>
            <td>{Address}</td>
            <td>{DateOfBirth}</td>
            <td>{Gender}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light" to={"/Admin/EditVoter/"+_id}><button class="btn btn-success mr-2">Edit</button></Link>&ensp;
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default VoterListRow;

