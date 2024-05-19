import React, { useState } from "react";
import './loginstyle.css'; // Import the CSS file

function LoginPage() {
  const [loginType, setLoginType] = useState("user");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [phno, setphno] = useState("");

  const handleLogin = () => {
    const databaseUrl = "https://onlinevotingappbackend.onrender.com/AdminsRoute";
    const votersUrl = "https://onlinevotingappbackend.onrender.com/VoterListRoute";

    if (loginType === "admin") {
      fetch(databaseUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then((adminCredentials) => {
          const foundAdmin = adminCredentials.find(
            (admin) => admin.username === userName && admin.password === password
          );

          if (foundAdmin) {
            console.log("id is: " + foundAdmin._id);
            window.location.href = window.location.origin+"/#/Admin/Home/" + foundAdmin._id;
          } else {
            alert("Invalid admin credentials");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error occurred while fetching admin data");
        });
    } else if (loginType === "user") {
      fetch(votersUrl)
        .then((response) => {
          if (!response.ok) {
            throw  Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then((userCredentials) => {
          const foundUser = userCredentials.find(
            (user) => user.Id === userId && user.PhoneNumber===phno
          );

          if (foundUser) {
            console.log("id is: " + foundUser._id);
            window.location.href = window.location.origin+"/#/User/Home/" + foundUser._id;
          } else {
            alert("Invalid user credentials");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error occurred while fetching user data");
        });
    }

    setUserName("");
    setPassword("");
    setUserId("");
    setphno("");
  };

  return (
    <div className="app ">
      <div className="login-form ">
        <div className="title ">Sign In</div>
        <div className="button-container">
          <button
            className={`col-6 btn  ${loginType === "user" ? "active btn-secondary" : ""}`}
            onClick={() => setLoginType("user")}
          >
            User Login
          </button>
          <button
            className={`col-6 btn  ${loginType === "admin" ? "active btn-secondary" : ""}`}
            onClick={() => setLoginType("admin")}
          >
            Admin Login
          </button>
        </div>
        <div className="input-container">
          {loginType === "user" ? (
            <div>
              <div className="input-container ">
              <label >User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                
              /></div>
              <div className="input-container">
              <label >Phone Number</label>
              <input
                type="text"
                value={phno}
                onChange={(e) => setphno(e.target.value)}
                
              />
              </div>
            </div>
          ) : (
            <div>
              <div className="input-container">
              <label >User Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              </div>
              <div className="input-container">
              <label >Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
            </div>
          )}
        </div>
        <div className="button-container">
          <button className="btn btn-secondary"  onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
