import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function UserNav(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const handleLogout = () => {
        id=null;
        window.location.href=window.location.origin;
      };
    return(
        <nav class="navbar  " style={{backgroundColor:"rgba(255, 99, 71, 0.2)"}}>
            <div class="nav" >
                <Link to={"/User/Home/"+id} class="nav-link text-dark " style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Home</Link>
                <Link to={"/User/Results/"+id} class="nav-link text-dark " style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Results</Link>
            </div>
            <div class="nav">
                <button onClick={handleLogout} class="btn  " style={{marginRight:"20px",backgroundColor:"rgba(212, 197, 185, 1)",color:"black"}}>Log Out</button>
            </div>
        </nav>
    )
}
export default UserNav;