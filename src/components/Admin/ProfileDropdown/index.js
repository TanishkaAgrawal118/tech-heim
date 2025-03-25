import React from "react";
import profile from "../../../assets/profile-circle.svg";
import "./style.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const handleAdminDashboard = () =>{
    navigate("/product-management");
  }
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      <div className="userDropdownMain">
        <div className="userDropdown-1">
          <div>
            <img src={profile} alt="profile" />
          </div>
          <div>
            <h6>Jimmy Smith</h6>
            <p>jimmysmith@gmail.com</p>
          </div>
        </div>
        <hr/>
        {user && (
        <div className="userDropdown-2" onClick={handleAdminDashboard}>
          <h6>Admin Dashboard</h6>
        </div>
      )}
      </div>
    </>
  );
};

export default ProfileDropdown;
