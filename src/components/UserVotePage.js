import React, { useEffect, useState } from "react";
import VotingCards from "./votingcards";

function UserVotePage(props) {
  const { Id } = props;
  const [isIdPresent, setIsIdPresent] = useState(true);
  const [PartyVotedfor, setPartyVoterfor] = useState("");

  useEffect(() => {
    const dataUrl = "https://onlinevotingappbackend.onrender.com/IsVotedRoute/";
    fetch(dataUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        const idPresent = jsonData.some((item) => item.Id === Id);
        const partyVoted = idPresent ? jsonData.find((item) => item.Id === Id).PartyVoted : "";
        setPartyVoterfor(partyVoted);
        setIsIdPresent(idPresent);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, [Id]);
  

  return (
    <div>
      
      {isIdPresent ? (
        <div>
          <h3 className="container mt-4 text-center" style={{fontFamily:"serif",fontWeight:"bold"}} >You have already voted for party "{PartyVotedfor}".</h3>
        <h3 className="container mt-4 text-center" style={{fontFamily:"serif",fontWeight:"bold"}} >ThankYou!!!</h3>
        </div>
        

      ) : (
        <div>
            <h1 className="container" style={{fontFamily:"serif",fontWeight:"bolder"}}>You can Vote here</h1>
          <VotingCards Id={Id}/>
        </div>
        
      )}
    </div>
  );
}

export default UserVotePage;
