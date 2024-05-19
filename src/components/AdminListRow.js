import Axios from "axios";
import {Link} from "react-router-dom";
function AdminListRow(props)
{
    const {_id,name,username,phonenumber,email,address,password} = props.obj; //Object destruction
   
    const handleClick = () =>{
        Axios.delete("https://onlinevotingappbackend.onrender.com/AdminsRoute/delete-Admin/" + _id )
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
            <td>{username}</td>
            <td>{phonenumber}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{password}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light" to={"/Admin/EditAdmin/"+_id}><button class="btn btn-success mr-2">Edit</button></Link>&ensp;
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default  AdminListRow;

