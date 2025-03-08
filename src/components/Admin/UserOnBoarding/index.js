import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import NavBar from "../../LandingPages/Navbar/NavBar";
import AdminDashboard from "../AdminDashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
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
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  dateOfBirth: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future")
    .test("min-age", "You must be at least 18 years old", (value) => {
      if (!value) return false;
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    })
    .test("max-age", "You cannot be older than 65 years", (value) => {
      if (!value) return false;
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age <= 65;
    }),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  addressLine2: Yup.string().nullable(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  zipCode: Yup.string()
    .matches(/^\d{5,6}$/, "ZIP/Pin Code must be 5 or 6 digits")
    .required("ZIP/Pin Code is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  preferredLanguage: Yup.string().required("Preferred Language is required"),
  marketingConsent: Yup.boolean(),
  profilePicture: Yup.mixed()
  .nullable()
  .test("fileSize", "File size should not exceed 2 MB", (file) => {
    if (!file) return true; 
    return file.size <= 2 * 1024 * 1024; 
  })
  .test("fileType", "Only JPG/PNG files are allowed", (file) => {
    if (!file) return true;
    return ["image/jpeg", "image/png"].includes(file.type);
  }),

});

const UserOnBoard = () => {
  const formik = useFormik({
    initialValues: initialFormData,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  const handleFileChange = (e) => {
    formik.setFieldValue("profilePicture", e.target.files[0]);
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
            <form onSubmit={formik.handleSubmit}>
              <Row>
                <Col md={6}>
                  <label>Full Name <p>*</p></label>
                  <input
                    type="text"
                    name="fullName"
                    {...formik.getFieldProps("fullName")}
                  />
                  <div className="error">
                    {formik.touched.fullName && formik.errors.fullName}
                  </div>
                </Col>
                <Col md={6}>
                  <label>Email Address<p>*</p></label>
                  <input
                    type="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>Phone Number<p>*</p></label>
                  <input
                    type="text"
                    name="phoneNumber"
                    maxLength="10"
                    {...formik.getFieldProps("phoneNumber")}
                  />
                  <div className="error">
                    {formik.touched.phoneNumber && formik.errors.phoneNumber}
                  </div>
                </Col>
                <Col md={6}>
                  <label>Date of Birth<p>*</p></label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    {...formik.getFieldProps("dateOfBirth")}
                  />
                  <div className="error">
                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>Address Line 1<p>*</p></label>
                  <input
                    type="text"
                    name="addressLine1"
                    {...formik.getFieldProps("addressLine1")}
                  />
                  <div className="error">
                    {formik.touched.addressLine1 && formik.errors.addressLine1}
                  </div>
                </Col>
                <Col md={6}>
                  <label>Address Line 2</label>
                  <input
                    type="text"
                    name="addressLine2"
                    {...formik.getFieldProps("addressLine2")}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <label>City<p>*</p></label>
                  <input
                    type="text"
                    name="city"
                    {...formik.getFieldProps("city")}
                  />
                  <div className="error">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </Col>
                <Col md={4}>
                  <label>State<p>*</p></label>
                  <select name="state" {...formik.getFieldProps("state")}>
                    <option value="">Select State</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                  <div className="error">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </Col>
                <Col md={4}>
                  <label>Country<p>*</p></label>
                  <select name="country" {...formik.getFieldProps("country")}>
                    <option value="">Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>Canada</option>
                  </select>
                  <div className="error">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>PIN Code<p>*</p></label>
                  <input
                    type="text"
                    name="zipCode"
                    {...formik.getFieldProps("zipCode")}
                  />
                  <div className="error">
                    {formik.touched.zipCode && formik.errors.zipCode}
                  </div>
                </Col>
                <Col md={6}>
                  <label>Username<p>*</p></label>
                  <input
                    type="text"
                    name="username"
                    {...formik.getFieldProps("username")}
                  />
                  <div className="error">
                    {formik.touched.username && formik.errors.username}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>Password<p>*</p></label>
                  <input
                    type="password"
                    name="password"
                    {...formik.getFieldProps("password")}
                  />
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </Col>
                <Col md={6}>
                  <label>Confirm Password<p>*</p></label>
                  <input
                    type="password"
                    name="confirmPassword"
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  <div className="error">
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label>Preferred Language</label>
                  <select
                    name="preferredLanguage"
                    {...formik.getFieldProps("preferredLanguage")}
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
                    onChange={handleFileChange}
                  />
                </Col>
              </Row>
              <div className="d-flex">
                <input
                  type="checkbox"
                  {...formik.getFieldProps("marketingConsent")}
                />
                <label>I consent to receive marketing emails</label>
              </div>
                    
              <Button type="submit" className="mt-3">
                Save
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserOnBoard;
