import Axios from "axios";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import VotingCardsRow from "./votingCardsRow";
function VotingCards(props){
    const {Id}=props;
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://onlinevotingappbackend.onrender.com/PartiesRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    return (
      <div>

      <div class="my-5 ">
        
        <div class=" mt-3">
          <div className="row ">
          {arr.map((val,ind) => (
            <VotingCardsRow Id={Id} obj={val}/>
          ))}
        </div>
        </div>
        
      </div>
      </div>
      )
    
}
export default VotingCards;