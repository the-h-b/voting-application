
import axios from "axios";

function VotingCardsRow(props) {
  const { Id, obj } = props;
  const { _id, PartyName, CandidateName, Symbol, Image } = obj;

  const handleClick = (partyName) => {
    const data = {
      Id: Id,
      PartyVoted: partyName,
    };
    console.log("partyName: "+partyName);
    axios
      .post("https://onlinevotingappbackend.onrender.com/IsVotedRoute/AddIsvoted", data)
      .then((response) => {
        console.log("Vote submitted successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error submitting vote:", error, _id);
      });
  };

  return (
    <div className="col-md-4 col-lg-3" style={{ marginBottom: "20px" }}>
      <div className="card">
        <div class="row justify-content-center">
          <img src={Symbol} className="mt-3 card-img-top" alt="Party Logo" style={{ height: "100px", width: "100px" }} />
          <img src={Image} className="mt-3 card-img-top" alt="Party img" style={{ height: "100px", width: "100px" }} />
        </div>

        <div className="card-body">
          <h5 className="card-title">Party Name: {PartyName}</h5>
          <p className="card-text">Candidate Name: {CandidateName}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button onClick={() => handleClick(PartyName)} className="btn btn-success">
            Click here to Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default VotingCardsRow;
