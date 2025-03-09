import React from "react";
import profile from "../../../assets/profile-circle.svg";
import "./style.css";
import { useNavigate } from "react-router";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleAdminDashboard = () =>{
    navigate("/product-management");
  }
 
  return (
    <>
      <div className="userDropdownMain">
        <div className="userDropdown-1" onClick={handleProfile}>
          <div>
            <img src={profile} alt="profile" />
          </div>
          <div>
            <h6>Jimmy Smith</h6>
            <p>jimmysmith@gmail.com</p>
          </div>
        </div>
        <hr/>
        <div className="userDropdown-2" onClick={handleAdminDashboard}>
          <h6>Admin dashboard</h6>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
