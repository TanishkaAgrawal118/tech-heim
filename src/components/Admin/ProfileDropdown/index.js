import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/slice/authSlice";
import { getAuth, signOut } from "firebase/auth";
import { MdDashboardCustomize } from "react-icons/md";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleAdminDashboard = () => {
    navigate("/product-management");
  };
  const onLogoutClick = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert("Failed to log out.");
    }
  };
  return (
    <>
      <div className="userDropdownMain">
        <div className="userDropdown-1">
          <div>
            <h6>{user?.name || "Guest"}</h6>
            <p>{user?.email || "No email available"}</p>
          </div>
        </div>

        {isAuthenticated && user?.role === "user" && (
          <>
            <hr />
            <div className="userDropdown-2" onClick={handleAdminDashboard}>
              <MdDashboardCustomize className="dashboard-logo" />{" "}
              <h6>Admin Dashboard</h6>
            </div>
          </>
        )}

        {!isAuthenticated ? null : (
          <p className="profile-logout" onClick={onLogoutClick}>
            Logout
          </p>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
