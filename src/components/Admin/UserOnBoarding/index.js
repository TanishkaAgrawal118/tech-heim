import React, { useState } from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import AdminDashboard from "../AdminDashboard";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import * as Yup from 'yup';

const initialFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
  username: "",
  password: "",
  confirmPassword: "",
  preferredLanguage: "",
  marketingConsent: false,
  profilePicture: null,
};

const UserOnBoard = () => {
  const [formData, setFormData] = useState(initialFormData);
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Name is Required"),
    email: Yup.string().required("Email us Required").email("Invalid email format"),
    phoneNumber: Yup.string().matches(/^\d(10)$/, "Phone Number must be 10 digits").re

  })
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <NavBar />
      <Container>
        <div className="user-onboard">
          <div className="user-onboard-dashboard">
            <AdminDashboard />
          </div>
          <div className="user-onboard-form">
            <h4>User Onboarding</h4>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    maxLength="10"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>Address Line 1</label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <label>Address Line 2</label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={4}>
                  <label>State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select State</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                </Col>
                <Col md={4}>
                  <label>Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>Canada</option>
                  </select>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>ZIP / PIN Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>Preferred Language</label>
                  <select
                    name="preferredLanguage"
                    value={formData.preferredLanguage}
                    onChange={handleChange}
                  >
                    <option value="">Select Language</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                  </select>
                </Col>
                <Col md={6}>
                  <label>Profile Picture</label>
                  <input
                    type="file"
                    name="profilePicture"
                    accept="image/jpeg, image/png"
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <div className="mt-2 d-flex">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                />
                <label className="ms-2">I consent to receive marketing emails</label>
              </div>

              <Button type="submit" className="mt-3">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserOnBoard;
