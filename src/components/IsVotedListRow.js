import Axios from "axios";
function IsVotedListRow(props)
{
    const {_id,Id,PartyVoted} = props.obj; //Object destruction
    
    const handleClick = () =>{
        Axios.delete("https://onlinevotingappbackend.onrender.com/IsVotedRoute/delete-isvoted/" + _id )
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
            <td>{Id}</td>
            <td>{PartyVoted}</td>
            <td class="d-flex justify-content-center">
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default IsVotedListRow;

