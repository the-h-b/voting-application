import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import axios from "axios";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const option = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Polls Result",
    },
  },
};

export default function Results() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label:"number of votes",
        data: [],
        backgroundColor: "rgba(166, 146, 122, 0.8)",
      },
    ],
  });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const partyVotes = {};

      try {
        const response1 = await axios.get("https://onlinevotingappbackend.onrender.com/PartiesRoute");
        const jsonData1 = response1.data;
        jsonData1.forEach((item) => {
          const partyName = item.PartyName;
          partyVotes[partyName] = 0;
        });

        const response2 = await axios.get("https://onlinevotingappbackend.onrender.com/IsVotedRoute");
        const jsonData2 = response2.data;

        jsonData2.forEach((item) => {
          const partyName = item.PartyVoted;
          partyVotes[partyName] = (partyVotes[partyName] || 0) + 1;
        });

        const partyNames = Object.keys(partyVotes);
        const votes = Object.values(partyVotes);

        setData({
          labels: partyNames,
          datasets: [
            { label:"number of votes",
              data: votes,
              backgroundColor: "rgba(166, 146, 122, 0.8)",
            },
          ],
        });

        const tableData = partyNames.map((partyName, index) => ({
          party: partyName,
          votes: votes[index],
        }));
        setTableData(tableData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6" style={{height:"70vh"}}>
              <Bar options={option} data={data} />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-5">Number of Votes for each Party</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Party Name</th>
                    <th>Count of Votes</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((party, index) => (
                    <tr key={index}>
                      <td>{party.party}</td>
                      <td>{party.votes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      );
}
