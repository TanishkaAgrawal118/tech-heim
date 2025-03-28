import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../LandingPages/Navbar/NavBar";
import Footer from "../LandingPages/Footer";
import "./contact.css";
import { Container } from "react-bootstrap";
import contact1 from "../../../src/assets/contact1.svg";
import contact2 from "../../../src/assets/contact2.svg";
import contact3 from "../../../src/assets/contact3.svg";
import { Link } from "react-router-dom"; // Fixed import for Link
import Modal from "../Modals/modal";
import Aos from "aos";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, googleProvider } from "../firebase/firebase";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { setUser } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const [isLoginOpen, setLoginOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const formRef = useRef();
  const dispatch = useDispatch();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bpfrj9r",
        "template_exja65e",
        formRef.current,
        "icdpaTWsfTitABDwn"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in user:", user); 
  
      if (!user) {
        console.error("No user returned from signInWithEmailAndPassword");
        alert("Login failed. No user found.");
        return;
      }
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        dispatch(setUser(userDoc.data()));
      } else {
        console.log("No user document found in Firestore.");
        alert("No user data found.");
      }
  
      alert("Login successful!");
      setLoginOpen(false);
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.user_name.value;
    const email = e.target.from_email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value;
    const role = 'user';
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        alert("Email already in use. Please log in.");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        role
      });
      alert("Account created successfully!");
      setActiveTab("login");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          role: "user",
        });
      }
      dispatch(setUser({
        name: user.displayName,
        email: user.email,
        role: userDoc.exists() ? userDoc.data().role : "user"
      }));
  
      alert("Login successful!");
      setLoginOpen(false);
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed.");
    }
  };
  return (
    <>
      <NavBar onLoginClick={() => setLoginOpen(true)} />
      <Container>
        <div className="contact-container">
          <div className="navigation">
            <Link to="/" style={{ color: "#717171" }}>
              Home
            </Link>{" "}
            &gt;{" "}
            <Link className="active" to="/contact">
              Contact Us
            </Link>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <img src={contact1} alt="contact" />
              <h3>Office</h3>
              <p>123 Main Street, Anytown, USA</p>
            </div>

            <div className="contact-item">
              <img src={contact2} alt="contact" />
              <h3>Email</h3>
              <p>info@techheim.com</p>
            </div>

            <div className="contact-item">
              <img src={contact3} alt="contact" />
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-form">
            <div className="contact-message" data-aos="fade-right">
              <h2>Message us</h2>
              <p>
                We're here to assist you every step of the way. Whether you have
                a question, need technical support, or simply want to share your
                feedback, our dedicated team is ready to listen and provide
                prompt assistance.
              </p>
            </div>
            <div className="contact-form1" data-aos="fade-left">
              <form ref={formRef} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name *"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email *"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </Container>

      <Footer />

      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <div className="login-modal">
          <div className="modal-tabs">
            <button
              className={activeTab === "login" ? "active" : ""}
              onClick={() => setActiveTab("login")}
            >
              Log In
            </button>
            <button
              className={activeTab === "signup" ? "active" : ""}
              onClick={() => setActiveTab("signup")}
            >
              Create Account
            </button>
          </div>
          <hr />
          {activeTab === "login" ? (
            <div className="login">
              <h2>Log in to Tech Heim</h2>
              <form onSubmit={handleLogin}>
                <div className="login-input">
                  <input type="email" name="email" placeholder="E-mail" required />
                  <input type="password" name="password" placeholder="Password" required />
                </div>

                <div className="login-info">
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <button type="submit" className="login-btn mt-3">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="login">
              <h2>Create an Account</h2>
              <form onSubmit={handleSignUp}>
                <div className="login-input">
                  <input type="text" name="user_name" placeholder="Your Name *" required />
                  <input type="email" name="from_email" placeholder="Email *" required />
                  <input type="password" name="password" placeholder="Password *" required />
                  <input type="password" name="confirm_password" placeholder="Confirm Password *" required />
                </div>

                <div className="login-info">
                  <button type="submit" className="login-btn mt-3">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="divider">
            <p>Or {activeTab === "login" ? "Log In" : "Sign Up"} with</p>
          </div>
          <div className="social-login">
            <button className="google-btn" onClick={handleGoogleLogin}>Google</button>
            <button className="facebook-btn">Facebook</button>
          </div>

          <div className="login-bottom">
            <p>
              {activeTab === "login"
                ? "Don’t have an account?"
                : "Already have an account?"}
              <span
                onClick={() =>
                  setActiveTab(activeTab === "login" ? "signup" : "login")
                }
                className="toggle-tab"
              >
                {activeTab === "login" ? "Sign up" : "Log in"}
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Contact;
