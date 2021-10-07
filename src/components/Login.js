import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginSuccess } from "../store/loginSlice";

function Login({ className }) {
  const [signinTab, setSiginTab] = useState(true);
  const [siginClassActive, setSiginClassActive] = useState("active");
  const [sigupClassActive, setSigupClassActive] = useState("");
  const [userNameSiginValue, setUserNameSiginValue] = useState("");
  const [passwordSiginValue, setPasswordSiginValue] = useState("");
  const [validateUserName, setValidateUsername] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [loginAlertClass, setLoginAlertClass] = useState("success");
  const [loginAlertResult, setLoginAlertResult] = useState(true);
  const [userNameSigupValue, setUserNameSigupValue] = useState("");
  const [validateUserNameSigup, setValidateUserNameSigup] = useState(true);
  const [passwordSigupValue, setPasswordSigupValue] = useState("");
  const [validatePasswordSigup, setValidatePasswordSigup] = useState(false);
  const [passwordRepeatSigupValue, setPasswordRepeatSigupValue] = useState("");
  const [validatePasswordRepeatSigup, setValidatePasswordRepeatSigup] =
    useState(false);
  const [fullNameSigupValue, setfullNameSigupValue] = useState("");
  const [validateFullNameSigup, setValidateFullNameSigup] = useState(false);
  const [phoneNumberSigupValue, setPhoneNumberSigupValue] = useState("");
  const [validatePhoneNumberSigup, setValidatePhoneNumberSigup] =
    useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login.loginStatus);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (loginStatus === true) {
      let timeout = setTimeout(() => {
        history.goBack();
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [loginStatus]);

  const selectTab = (tabName) => {
    if (tabName === "sigin") {
      setSiginTab(true);
      setSiginClassActive("active");
      setSigupClassActive("");
    } else {
      setSiginTab(false);
      setSiginClassActive("");
      setSigupClassActive("active");
    }
  };

  const updateSiginInputValue = (e, parameter) => {
    setLoginAlert(false);
    if (parameter === "user-name") {
      setUserNameSiginValue(e.target.value);
    } else {
      setPasswordSiginValue(e.target.value);
    }

    if (userNameSiginValue !== "") {
      setValidateUsername(false);
    }
    if (passwordSiginValue !== "") {
      setValidatePassword(false);
    }
  };

  const loginBtn = () => {
    if (userNameSiginValue === "") {
      setValidateUsername(true);
    }
    if (passwordSiginValue === "") {
      setValidatePassword(true);
    }
    if (userNameSiginValue !== "" && passwordSiginValue !== "") {
      fetch("https://enjoycomputer.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userNameSiginValue,
          password: passwordSiginValue,
        }),
      })
        .then((response) => {
          setLoginAlert(true);
          if (response.status === 200) {
            setLoginAlertClass("success");
            setLoginAlertResult(true);
            return response.json();
          } else if (response.status === 400) {
            setLoginAlertClass("fail");
            setLoginAlertResult(false);
            return null;
          }
        })
        .then((user) => {
          if (user !== null) {
            dispatch(loginSuccess(user));
          } else {
            return;
          }
        });
    }
  };

  const updateSigupInputValue = (e, parameter) => {};

  return (
    <div className={className}>
      <div id="container">
        <div id="signup-signin">
          <div id="select-tabs">
            <div
              className={`tab ${siginClassActive}`}
              onClick={() => selectTab("sigin")}
            >
              Đăng nhập
            </div>
            <div
              className={`tab ${sigupClassActive}`}
              onClick={() => selectTab("sigup")}
            >
              Đăng ký
            </div>
          </div>
          <div id="signup-signin-content">
            {signinTab ? (
              <div id="sigin-content">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="username hoặc email (admin)"
                    onChange={(e) => updateSiginInputValue(e, "user-name")}
                    value={userNameSiginValue}
                  ></input>
                  {validateUserName && (
                    <p className="result-validate">
                      Bạn cần nhập tên đăng nhập hoặc email
                    </p>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="password (admin)"
                    onChange={(e) => updateSiginInputValue(e, "password")}
                    value={passwordSiginValue}
                  ></input>
                  {validatePassword && (
                    <p className="result-validate">Bạn cần nhập mật khẩu</p>
                  )}
                </div>
                <div id="remember-acount-forgot-password">
                  <div id="remember-acount">
                    <input
                      type="checkbox"
                      id="remember-acount-checkbox"
                    ></input>
                    <label htmlFor="remember-acount-checkbox">
                      Ghi nhớ tài khoản
                    </label>
                  </div>
                  <a id="forgot-password">Quên mật khẩu?</a>
                </div>
                {loginAlert && (
                  <p id="login-alert" className={loginAlertClass}>
                    {loginAlertResult
                      ? "Đăng nhập thành công"
                      : "Sai tên đăng nhập hoặc mật khẩu"}
                  </p>
                )}
                <button id="sign-in-btn" onClick={loginBtn}>
                  Đăng nhập
                </button>
                <p style={{ textAlign: "center" }}>Hoặc</p>
                <div id="login-with-gg-fb">
                  <button id="login-with-gg">
                    <i
                      className="fab fa-google"
                      style={{ marginRight: "4px" }}
                    ></i>
                    <span>Login with Google</span>
                  </button>
                  <button id="login-with-fb">
                    <i
                      className="fab fa-facebook-square"
                      style={{ marginRight: "4px" }}
                    ></i>
                    <span>Login with Facbook</span>
                  </button>
                </div>
              </div>
            ) : (
              <div id="sigup-content">
                <div className="sigup-input-box">
                  <input
                    type="text"
                    placeholder="Tên đăng nhập hoặc email"
                    onChange={(e) => updateSigupInputValue(e, "user-name")}
                    value={userNameSigupValue}
                  ></input>
                  {validateUserNameSigup && (
                    <p className="result-validate">
                      Bạn cần nhập tên đăng nhập hoặc email
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const LoginStyled = styled(Login)`
  #signup-signin {
    max-width: 400px;
    margin: 50px auto;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 10px;
    overflow: hidden;
  }
  #select-tabs {
    width: 100%;
    display: flex;
  }
  .tab {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f2f4f7;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: #e3e3e3 1px solid;
  }

  .active {
    background-color: white;
    border-bottom: transparent 1px solid;
    border-left: #e3e3e3 1px solid;
    border-right: #e3e3e3 1px solid;
  }

  .tab:hover {
    color: #003cff;
  }

  .tab.active:hover {
    color: black;
  }

  #signup-signin-content {
    width: 100%;
    padding: 30px;
    background-color: white;
    border-left: #e3e3e3 1px solid;
    border-right: #e3e3e3 1px solid;
  }

  /* style cho signin  */

  .input-box {
    width: 100%;
    margin-bottom: 15px;
  }

  .input-box input {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: #c4c4c4 1px solid;
    outline: none;
  }
  .input-box input:focus {
    border: 1px solid #56b4ef;
    box-shadow: 0px 0px 1px 3px #c8def0;
  }

  .result-validate {
    color: #ec5252;
    margin-top: 4px !important;
    font-style: italic;
  }

  #remember-acount-forgot-password {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  #forgot-password {
    color: royalblue;
    cursor: pointer;
  }

  #forgot-password:hover {
    color: #002dbf;
  }

  #login-alert {
    text-align: center;
  }

  #login-alert.success {
    color: #40bf55;
  }

  #login-alert.fail {
    color: #ec5252;
  }

  #sign-in-btn {
    width: 100%;
    border: none;
    margin: 20px 0px 10px 0px;
    padding: 15px 20px;
    font-size: 18px;
    border-radius: 5px;
    background-color: #40bf55;
    color: white;
  }

  #sign-in-btn:hover {
    background-color: #349c45;
  }

  #login-with-gg-fb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  #login-with-gg-fb button {
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    color: white;
  }

  #login-with-gg {
    background-color: #e04a32;
  }

  #login-with-fb {
    background-color: #1f3d96;
  }

  #login-with-gg:hover {
    background-color: #d93600;
  }

  #login-with-fb:hover {
    background-color: #001e78;
  }

  /* style */
`;

export default LoginStyled;
