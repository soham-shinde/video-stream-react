import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  MultiChoiceDialog,
  MultiLanguageChoice,
} from "../components/MultiChoiceDialog";
import Loader from "../components/Loader";
import { loginUser } from "../api/user.api";

export default function LoginPage() {
  const navigator = useNavigate();
  const [login, setLogin] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorsSign, setErrorsSign] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [multiChoice, setMultiChoice] = useState(false);

  function handelMove(e) {
    const btnText = e.target.innerText;
    if (btnText === "Register") {
      setLogin(true);
      e.target.parentElement.parentElement.animate(
        [{ transform: "translate(-100%,0)" }],
        {
          duration: 500,
          fill: "forwards",
        }
      );
    } else if (btnText === "Login") {
      setLogin(false);
      e.target.parentElement.parentElement.animate(
        [{ transform: "translate(0,0)" }],
        {
          duration: 500,
          fill: "forwards",
        }
      );
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const validateForm = () => {
    const newErrorsSign = {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!signUpData.name) {
      newErrorsSign.name = "Name is required";
    }

    if (!signUpData.phone) {
      newErrorsSign.phone = "Phone number is required";
    }

    if (!signUpData.email) {
      newErrorsSign.email = "Email is required";
    } else if (!isValidEmail(signUpData.email)) {
      newErrorsSign.email = "Invalid email format";
    }

    if (!signUpData.password) {
      newErrorsSign.password = "Password is required";
    } else if (signUpData.password.length < 6) {
      newErrorsSign.password = "Password must be at least 6 characters long";
    }

    if (signUpData.password !== signUpData.confirmPassword) {
      newErrorsSign.confirmPassword = "Passwords do not match";
    }

    setErrorsSign(newErrorsSign);

    return Object.values(newErrorsSign).every((error) => error === "");
  };

  const handleSignUpForm = (event) => {
    event.preventDefault();

    if (true) {
      setMultiChoice(true);
      console.log("Form data:", signUpData);
    } else {
      console.log("Form submission blocked due to errorsSign");
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!isValidEmail(loginData.email)) {
      newErrors.email = "Invalid email format";
      formIsValid = false;
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    }

    if (formIsValid) {
      // navigator("/");
      console.log(loginData);

      setLoading(true);

      const resp = loginUser(loginData);
      resp
        .then(function (response) {
          setLoading(false);
          alert(response.message);
          navigator("/");
        })
        .catch(function (err) {
          setLoading(false);
          alert(err.response.data.detail);
        });
      console.log(resp);
      setLoginData({
        email: "",
        password: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Navbar />
      <div className="l-container">
        <div className="main-container">
          <div id="l-overlay" className="l-overlay">
            {!login && (
              <div className="l-overlay-inner">
                <div className="l-icon">
                  <img src="img/icons/register user icon.svg" alt="" />
                </div>
                <div className="l-message">
                  <p id="l-message">Don't have Account?</p>
                </div>
                <button className="l-btn" onClick={handelMove}>
                  Register
                </button>
              </div>
            )}

            {login && (
              <div className="l-overlay-inner">
                <div className="l-icon">
                  <img src="img/icons/register user icon.svg" alt="" />
                </div>
                <div className="l-message">
                  <p id="l-message">Already have Account?</p>
                </div>
                <button className="l-btn" onClick={handelMove}>
                  Login
                </button>
              </div>
            )}
          </div>

          <div className="login-container">
            <div className="login-inner">
              <div className="login-title">
                <h3>Login</h3>
              </div>

              <div className="form">
                <form className="f-container" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="useremail"
                      placeholder="Email id"
                      type="text"
                      name="email"
                      autoComplete="new-email"
                      value={loginData.email}
                      onChange={handleChangeLogin}
                    />
                    <div className="error-message">{errors.email}</div>
                  </div>

                  <div className="form-group">
                    <input
                      className="userpassword"
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      name="password"
                      value={loginData.password}
                      onChange={handleChangeLogin}
                    />
                    <div className="error-message">{errors.password}</div>
                  </div>

                  <button className="l-btn" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="login-container">
            <div className="login-inner">
              <div className="login-title">
                <h3>Register</h3>
              </div>

              <form className="f-container" onSubmit={handleSignUpForm}>
                <div className="form-group">
                  <input
                    placeholder="User name"
                    className="username"
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={signUpData.name}
                    onChange={handleChange}
                  />
                  <div className="error-message">{errorsSign.name}</div>
                </div>

                <div className="form-group">
                  <input
                    placeholder="Phone"
                    className="userphone"
                    type="text"
                    name="phone"
                    value={signUpData.phone}
                    onChange={handleChange}
                  />
                  <div className="error-message">{errorsSign.phone}</div>
                </div>

                <div className="form-group">
                  <input
                    placeholder="Email"
                    className="useremail"
                    type="email"
                    name="email"
                    value={signUpData.email}
                    onChange={handleChange}
                  />
                  <div className="error-message">{errorsSign.email}</div>
                </div>

                <div className="form-group">
                  <input
                    placeholder="Password"
                    className="userpassword"
                    autoComplete="new-password"
                    type="password"
                    name="password"
                    value={signUpData.password}
                    onChange={handleChange}
                  />
                  <div className="error-message">{errorsSign.password}</div>
                </div>

                <div className="form-group">
                  <input
                    placeholder="Confirm Password"
                    className="userpassword"
                    type="password"
                    name="confirmPassword"
                    value={signUpData.confirmPassword}
                    onChange={handleChange}
                  />
                  <div className="error-message">
                    {errorsSign.confirmPassword}
                  </div>
                </div>

                <button className="l-btn" type="submit">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {multiChoice && (
        <MultiChoiceDialog
          formData={signUpData}
          setMultiChoice={setMultiChoice}
        />
      )}
      {loading && <Loader />}

    </>
  );
}
