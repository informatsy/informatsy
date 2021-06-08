import React, { Component } from "react";
import logo from "../Assets/logo.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import MobileView from "../components/mobile";
import Visibility from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Mvbg from "../Assets/mv-lg-bg.jpg";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import IconButton from "@material-ui/core/IconButton";
import fb_icon from "../Assets/fb-img.png";
import g_icon from "../Assets/google-img.png";
import li_icon from "../Assets/linkedin_logo.webp";
import Input from "../components/Input";

import "../css/Login.css";
import { FormHelperText } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import { Typography } from "@material-ui/core";
export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmPass: false,
    };
  }
  render() {
    const img_size = 30;
    const style = { color: "grey", lineHeight: "55px" };
    const extendedStyles = {
      color: "grey",

      position: "absolute",
      left: "76%",
    };
    return (
      <>
        <div className="login_main">
          <div className="login_parent">
            <div className="login_side_bar">
              <div className="login_side_p1"></div>

              <div className="login_side_p2"></div>
              <div className="login_side_p3"></div>
              <div className="login_side_p4"></div>
            </div>
            <div className="login_child">
              <div className="top_tag">
                <h2>Hola!</h2>
                <p>Create a new account</p>
              </div>
              <div className="form_main">
                <div className="forms_content1">
                  <Input
                    name="Username or Email"
                    classname="one"
                    type="text"
                    component={<PersonRoundedIcon style={style} />}
                  />
                </div>
                <div
                  className="forms_content1"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Input
                    name="Password"
                    classname="two"
                    type={this.state.showPassword ? "text" : "password"}
                    component={<LockOpenRoundedIcon style={style} />}
                  />
                  <IconButton
                    aria-label="lock"
                    style={extendedStyles}
                    onClick={() => {
                      this.setState({
                        showPassword: !this.state.showPassword,
                      });
                    }}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </div>
                <div
                  className="forms_content1"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Input
                    name="Confirm password"
                    classname="three"
                    type={this.state.showConfirmPass ? "text" : "password"}
                    component={<LockOpenRoundedIcon style={style} />}
                  />
                  <IconButton
                    aria-label="lock"
                    style={extendedStyles}
                    onClick={() => {
                      this.setState({
                        showConfirmPass: !this.state.showConfirmPass,
                      });
                    }}
                  >
                    {this.state.showConfirmPass ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </div>
              </div>
              <Typography
                className="login_forgot_password"
                component={Link}
                to="/forgot"
              >
                Forgot password
              </Typography>
              <div className="button_main">
                <Button
                  className="login_btn"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/login"
                  disableElevation
                >
                  Login
                </Button>
              </div>

              <div className="login_bottom_main">
                <p>or via social media</p>
                <div className="social_acc">
                  <IconButton
                    aria-label="facebook"
                    className="btn_sa"
                    component={Link}
                    to="/login"
                  >
                    <img
                      src={fb_icon}
                      alt="facebook"
                      width={img_size}
                      height={img_size}
                    />
                  </IconButton>
                  <IconButton
                    className="btn_sa"
                    aria-label="google"
                    component={Link}
                    to="/login"
                  >
                    <img
                      src={g_icon}
                      alt="google"
                      width={img_size}
                      height={img_size}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="linkedIn"
                    className="btn_sa"
                    component={Link}
                    to="/login"
                  >
                    <img
                      src={li_icon}
                      alt="linkedIn"
                      width={img_size + 3}
                      height={img_size + 3}
                    />
                  </IconButton>
                </div>
                <div className="login_to_signup">
                  <span>Already have account ? </span>
                  <Typography
                    className="login_forgot_password"
                    component={Link}
                    to="/forgot"
                  >
                    Sign in
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mv_login_main">
          <div className="mv_login_parent">
            <div className="mc_login_img-parent">
              <div className="img_overlay-login"></div>
              <img
                id="img_bg_login"
                src={Mvbg}
                alt="bg"
                width="95%"
                height="100%"
                className="login_img-bg"
              />
              <div className="svg-helper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="850 60 1440 320"
                  width="1100.38"
                  height="160.57996"
                  className="svg-img"
                >
                  <path
                    fill="#ffff"
                    fill-opacity="1"
                    d="M0,224L40,202.7C80,181,160,139,240,149.3C320,160,400,224,480,240C560,256,640,224,720,181.3C800,139,880,85,960,69.3C1040,53,1120,75,1200,122.7C1280,171,1360,245,1400,282.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mv-login-logo">
              <div className="mv-login-img-main">
                <img
                  src={logo}
                  className="mv-login-logo-img"
                  width={img_size - 3}
                  height={img_size - 3}
                  alt="logo"
                />
              </div>
              <p className="mv-login-logo-head">Informatsy</p>
            </div>
            <div className="mv-login-form-main">
              <div className="mv-login-form-parent">
                <h2 className="mv-login-heading">Create Account</h2>
                <div className="mv-login-form-body">
                  <div
                    className="my-signup-form-input"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Input
                        name="Username or Email"
                        classname="mv-login-form-text"
                        component={<PersonRoundedIcon style={style} />}
                      />
                    </div>
                    <div>
                      <Input
                        name="Password"
                        type={this.state.showPassword ? "text" : "password"}
                        classname="mv-login-form-pass"
                        component={<PersonRoundedIcon style={style} />}
                      />
                      <IconButton
                        aria-label="lock"
                        style={extendedStyles}
                        onClick={() => {
                          this.setState({
                            showPassword: !this.state.showPassword,
                          });
                        }}
                      >
                        {this.state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </div>
                    <div>
                      <Input
                        name="Confirm password"
                        classname="mv-login-form-confirmPass"
                        type={this.state.showConfirmPass ? "text" : "password"}
                        component={<PersonRoundedIcon style={style} />}
                      />
                      <IconButton
                        aria-label="lock"
                        style={extendedStyles}
                        onClick={() => {
                          this.setState({
                            showConfirmPass: !this.state.showConfirmPass,
                          });
                        }}
                      >
                        {this.state.showConfirmPass ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                      <FormHelperText>
                        {this.state.confirmPassMsg}
                      </FormHelperText>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      margin: "-1em 0 0 1em",
                    }}
                  >
                    <Checkbox
                      icon={<CircleUnchecked />}
                      checkedIcon={<CircleCheckedFilled />}
                    />
                    <div className="login-main-via">
                      <span className="">I agree with &nbsp;</span>
                      <Typography
                        className="login-main-via"
                        component={Link}
                        to="/forgot"
                      >
                        Privacy policy
                      </Typography>
                    </div>
                  </div>

                  <div className="button_main">
                    <Button
                      className="login_btn"
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/login"
                    >
                      Create account
                    </Button>
                  </div>
                  <div className="login_bottom_main">
                    <p className="login-main-via">or via social media</p>
                    <div className="social_acc">
                      <IconButton
                        aria-label="facebook"
                        className="btn_sa"
                        component={Link}
                        to="/login"
                      >
                        <img
                          src={fb_icon}
                          alt="facebook"
                          width={img_size}
                          height={img_size}
                        />
                      </IconButton>
                      <IconButton
                        className="btn_sa"
                        aria-label="google"
                        component={Link}
                        to="/login"
                      >
                        <img
                          src={g_icon}
                          alt="google"
                          width={img_size}
                          height={img_size}
                        />
                      </IconButton>
                      <IconButton
                        aria-label="linkedIn"
                        className="btn_sa"
                        component={Link}
                        to="/login"
                      >
                        <img
                          src={li_icon}
                          alt="linkedIn"
                          width={img_size + 3}
                          height={img_size + 3}
                        />
                      </IconButton>
                    </div>
                    <div className="login-main-via">
                      <span className="">Don't have an account ?</span>
                      <Typography
                        className="login-main-via"
                        component={Link}
                        to="/forgot"
                      >
                        Sign up
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
