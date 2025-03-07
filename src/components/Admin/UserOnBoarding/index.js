import React from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import AdminDashboard from "../AdminDashboard";
import { Container } from "react-bootstrap";
import './style.css'

const UserOnBoard = () => {
  return (
    <>
      <NavBar />
      <Container>
        <AdminDashboard />
      </Container>
    </>
  );
};

export default UserOnBoard;
