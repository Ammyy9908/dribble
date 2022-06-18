import React from "react";
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import useOneTapLogin from "../hooks/useOneTapLogin";
import BrandIcon from "../Icons/BrandIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import "./Login.css";
function Login() {
  const user = useOneTapLogin();
  let navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  return (
    <div className="sign-in">
      <div className="auth_sidebar">
        <div className="auth_sidebar_content">
          <div className="auth_sidebar_header">
            <Link to="/">
              <BrandIcon />
            </Link>
            <h1>Discover the world’s top Designers & Creatives.</h1>
          </div>
          <div className="sidbar_artwork">
            <div
              className="artwork_image"
              style={{
                backgroundImage: `url('https://cdn.dribbble.com/assets/auth/sign-in-a63d9cf6c1f626ccbde669c582b10457b07523adb58c2a4b46833b7b4925d9a3.jpg')`,
              }}
            ></div>
            <div className="artwork_credit">
              Art by <a href="#">Irina Valeeva</a>
            </div>
          </div>
        </div>
      </div>
      <div className="session-content">
        <div className="auth-nav">
          <p>
            Not a member?{" "}
            <a href="#" className="text-indigo-500">
              Sign up now
            </a>
          </p>
        </div>
        <div className="auth-main">
          <div className="auth__content">
            <h2>Sign in to dribbble</h2>
            <div className="auth_connetion flex gap-2 items-center mb-10">
              <div className="buttonDiv"></div>
              <a href="#twitter_btn" className="tweeter_btn">
                <TwitterIcon />
              </a>
            </div>
            <hr className="auth_divider"></hr>
            <div className="auth_form">
              <form action="">
                <div className="form_fields">
                  <fieldset>
                    <label htmlFor="username_email">
                      Username or Email address
                    </label>
                    <input
                      type="text"
                      id="username_email"
                      name="username"
                      autoComplete="off"
                    />
                  </fieldset>

                  <fieldset>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="off"
                    />
                  </fieldset>
                  <input type="submit" value="Sign In" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
