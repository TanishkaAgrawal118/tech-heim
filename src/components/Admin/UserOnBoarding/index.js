import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "../../LandingPages/Navbar/NavBar";
import AdminDashboard from "../AdminDashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
import { STATES, COUNTRIES, LANGUAGES } from "../../constants/constant";
import "./style.css";

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

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber: Yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Phone number is required"),
  dateOfBirth: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future")
    .test("min-age", "You must be at least 18 years old", (value) => {
      if (!value) return false;
      const age = new Date().getFullYear() - new Date(value).getFullYear();
      return age >= 18;
    })
    .test("max-age", "You cannot be older than 65 years", (value) => {
      if (!value) return false;
      const age = new Date().getFullYear() - new Date(value).getFullYear();
      return age <= 65;
    }),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  zipCode: Yup.string().matches(/^\d{5,6}$/, "ZIP/Pin Code must be 5 or 6 digits").required("ZIP/Pin Code is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
  preferredLanguage: Yup.string().required("Preferred Language is required"),
  marketingConsent: Yup.boolean(),
  profilePicture: Yup.mixed()
    .nullable()
    .test("fileSize", "File size should not exceed 2 MB", (file) => !file || file.size <= 2 * 1024 * 1024)
    .test("fileType", "Only JPG/PNG files are allowed", (file) => !file || ["image/jpeg", "image/png"].includes(file.type)),
});

const UserOnBoard = () => {
  const formik = useFormik({
    initialValues: initialFormData,
    validationSchema,
    onSubmit: (values) => console.log("Form Data Submitted:", values),
  });

  const handleFileChange = (e) => formik.setFieldValue("profilePicture", e.target.files[0]);

  const renderInputField = (label, name, type = "text", extraProps = {}) => (
    <Col md={6}>
      <label>{label}<p>*</p></label>
      <input type={type} name={name} {...formik.getFieldProps(name)} {...extraProps} />
      <div className="error">{formik.touched[name] && formik.errors[name]}</div>
    </Col>
  );

  const renderSelectField = (label, name, options) => (
    <Col md={4}>
      <label>{label}<p>*</p></label>
      <select name={name} {...formik.getFieldProps(name)}>
        {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
      </select>
      <div className="error">{formik.touched[name] && formik.errors[name]}</div>
    </Col>
  );

  return (
    <>
      <NavBar />
      <Container>
        <div className="user-onboard">
          <div className="user-onboard-dashboard"><AdminDashboard /></div>
          <div className="user-onboard-form">
            <h4>User Onboarding</h4>
            <form onSubmit={formik.handleSubmit}>
              <Row>
                {renderInputField("Full Name", "fullName")}
                {renderInputField("Email Address", "email", "email")}
              </Row>

              <Row>
                {renderInputField("Phone Number", "phoneNumber", "text", { maxLength: "10" })}
                {renderInputField("Date of Birth", "dateOfBirth", "date")}
              </Row>

              <Row>
                {renderInputField("Address Line 1", "addressLine1")}
                {renderInputField("Address Line 2", "addressLine2")}
              </Row>

              <Row>
                {renderInputField("City", "city")}
                {renderSelectField("State", "state", STATES)}
                {renderSelectField("Country", "country", COUNTRIES)}
              </Row>

              <Row>
                {renderInputField("PIN Code", "zipCode")}
                {renderInputField("Username", "username")}
              </Row>

              <Row>
                {renderInputField("Password", "password", "password")}
                {renderInputField("Confirm Password", "confirmPassword", "password")}
              </Row>

              <Row>
                <Col md={6}>
                  <label>Preferred Language</label>
                  <select name="preferredLanguage" {...formik.getFieldProps("preferredLanguage")}>
                    {LANGUAGES.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
                  </select>
                </Col>
                <Col md={6}>
                  <label>Profile Picture</label>
                  <input type="file" name="profilePicture" onChange={handleFileChange} />
                </Col>
              </Row>

              <div className="d-flex">
                <input type="checkbox" {...formik.getFieldProps("marketingConsent")} />
                <label>I consent to receive marketing emails</label>
              </div>

              <Button type="submit" className="mt-3">Save</Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserOnBoard;
