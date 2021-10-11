import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginSuccess } from "../store/loginSlice";

function Login({ className }) {
  const [signinTab, setSigninTab] = useState(true);
  const [signinClassActive, setSigninClassActive] = useState("active");
  const [signupClassActive, setSignupClassActive] = useState("");
  const [userNameSigninValue, setUserNameSigninValue] = useState("");
  const [passwordSigninValue, setPasswordSigninValue] = useState("");
  const [validateUserName, setValidateUsername] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [loginAlertClass, setLoginAlertClass] = useState("success");
  const [loginAlertResult, setLoginAlertResult] = useState(true);
  const [userNameSignupValue, setUserNameSignupValue] = useState("");
  const [validateUserNameSignup, setValidateUserNameSignup] = useState(false);
  const [passwordSignupValue, setPasswordSignupValue] = useState("");
  const [validatePasswordSignup, setValidatePasswordSignup] = useState(false);
  const [passwordRepeatSignupValue, setPasswordRepeatSignupValue] =
    useState("");
  const [validatePasswordRepeatSignup, setValidatePasswordRepeatSignup] =
    useState(false);
  const [fullNameSignupValue, setfullNameSignupValue] = useState("");
  const [validateFullNameSignup, setValidateFullNameSignup] = useState(false);
  const [phoneNumberSignupValue, setPhoneNumberSignupValue] = useState("");
  const [validatePhoneNumberSignup, setValidatePhoneNumberSignup] =
    useState(false);
  const [signupAlert, setSignupAlert] = useState(false);

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
    if (tabName === "signin") {
      setSigninTab(true);
      setSigninClassActive("active");
      setSignupClassActive("");
    } else {
      setSigninTab(false);
      setSigninClassActive("");
      setSignupClassActive("active");
    }
  };

  const updateSigninInputValue = (e, parameter) => {
    setLoginAlert(false);
    if (parameter === "user-name") {
      setUserNameSigninValue(e.target.value);
    } else {
      setPasswordSigninValue(e.target.value);
    }

    if (userNameSigninValue !== "") {
      setValidateUsername(false);
    }
    if (passwordSigninValue !== "") {
      setValidatePassword(false);
    }
  };

  // chuc nang nut dang nhap
  const loginBtn = () => {
    if (userNameSigninValue === "") {
      setValidateUsername(true);
    }
    if (passwordSigninValue === "") {
      setValidatePassword(true);
    }
    if (userNameSigninValue !== "" && passwordSigninValue !== "") {
      fetch("https://enjoycomputer.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userNameSigninValue,
          password: passwordSigninValue,
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

  const updateSignupInputValue = (e, parameter) => {
    if (parameter === "user-name") {
      setUserNameSignupValue(e.target.value);
    } else if (parameter === "password") {
      setPasswordSignupValue(e.target.value);
    } else if (parameter === "password-repeat") {
      setPasswordRepeatSignupValue(e.target.value);
    } else if (parameter === "fullname") {
      setfullNameSignupValue(e.target.value);
    } else if (parameter === "phone-number") {
      setPhoneNumberSignupValue(e.target.value);
    }

    if (userNameSignupValue !== "") {
      setValidateUserNameSignup(false);
    }
    if (passwordSignupValue !== "") {
      setValidatePasswordSignup(false);
    }
    if (passwordRepeatSignupValue !== "") {
      setValidatePasswordRepeatSignup(false);
    }
    if (fullNameSignupValue !== "") {
      setValidateFullNameSignup(false);
    }
    if (phoneNumberSignupValue !== "") {
      setValidatePhoneNumberSignup(false);
    }
    setSignupAlert(false);
  };

  // chuc nang nut signup
  const signupBtn = () => {
    if (userNameSignupValue === "") {
      setValidateUserNameSignup(true);
    }
    if (passwordSignupValue === "") {
      setValidatePasswordSignup(true);
    }
    if (passwordRepeatSignupValue === "") {
      setValidatePasswordRepeatSignup(true);
    }
    if (fullNameSignupValue === "") {
      setValidateFullNameSignup(true);
    }
    if (phoneNumberSignupValue === "") {
      setValidatePhoneNumberSignup(true);
    }
    if (
      userNameSignupValue !== "" &&
      passwordSignupValue !== "" &&
      passwordRepeatSignupValue !== "" &&
      fullNameSignupValue !== "" &&
      phoneNumberSignupValue !== ""
    ) {
      setSignupAlert(true);
    }
  };

  return (
    <div className={className}>
      <div id="container">
        <div id="signup-signin">
          <div id="select-tabs">
            <div
              className={`tab ${signinClassActive}`}
              onClick={() => selectTab("signin")}
            >
              Đăng nhập
            </div>
            <div
              className={`tab ${signupClassActive}`}
              onClick={() => selectTab("signup")}
            >
              Đăng ký
            </div>
          </div>
          <div id="signup-signin-content">
            {signinTab ? (
              <div
                id="signin-content"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    loginBtn();
                  }
                }}
              >
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="username hoặc email (admin)"
                    onChange={(e) => updateSigninInputValue(e, "user-name")}
                    value={userNameSigninValue}
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
                    onChange={(e) => updateSigninInputValue(e, "password")}
                    value={passwordSigninValue}
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
              <div id="signup-content">
                <div className="signup-input-box">
                  <input
                    type="text"
                    placeholder="Tên đăng nhập hoặc email"
                    onChange={(e) => updateSignupInputValue(e, "user-name")}
                    value={userNameSignupValue}
                  ></input>
                  {validateUserNameSignup && (
                    <p className="result-validate">
                      Bạn cần nhập tên đăng nhập hoặc email
                    </p>
                  )}
                </div>
                <div className="signup-input-box">
                  <input
                    type="text"
                    placeholder="Mật khẩu"
                    onChange={(e) => updateSignupInputValue(e, "password")}
                    value={passwordSignupValue}
                  ></input>
                  {validatePasswordSignup && (
                    <p className="result-validate">Bạn cần nhập mật khẩu</p>
                  )}
                </div>
                <div className="signup-input-box">
                  <input
                    type="text"
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) =>
                      updateSignupInputValue(e, "password-repeat")
                    }
                    value={passwordRepeatSignupValue}
                  ></input>
                  {validatePasswordRepeatSignup && (
                    <p className="result-validate">Bạn cần nhập lại mật khẩu</p>
                  )}
                </div>
                <div className="signup-input-box">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    onChange={(e) => updateSignupInputValue(e, "fullname")}
                    value={fullNameSignupValue}
                  ></input>
                  {validateFullNameSignup && (
                    <p className="result-validate">Bạn cần nhập họ và tên</p>
                  )}
                </div>
                <div className="signup-input-box">
                  <input
                    type="number"
                    placeholder="Số điện thoại"
                    onChange={(e) => updateSignupInputValue(e, "phone-number")}
                    value={phoneNumberSignupValue}
                  ></input>
                  {validatePhoneNumberSignup && (
                    <p className="result-validate">
                      Bạn cần nhập số điện thoại
                    </p>
                  )}
                </div>
                {signupAlert && (
                  <p id="signup-alert-result">Đăng ký thành công</p>
                )}
                <button id="sign-up-btn" onClick={signupBtn}>
                  Đăng ký
                </button>
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

  /* style cho signup */
  .signup-input-box {
    width: 100%;
    margin-bottom: 15px;
  }
  .signup-input-box input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: #c4c4c4 1px solid;
    outline: none;
  }

  .signup-input-box input:focus {
    border: 1px solid #56b4ef;
    box-shadow: 0px 0px 1px 3px #c8def0;
  }

  #signup-alert-result {
    text-align: center;
    color: #40bf55;
  }

  #sign-up-btn {
    width: 100%;
    border: none;
    margin: 20px 0px 10px 0px;
    padding: 15px 20px;
    font-size: 18px;
    border-radius: 5px;
    background-color: #40bf55;
    color: white;
  }

  #sign-up-btn:hover {
    background-color: #349c45;
  }

  /* responsive cho màn hình từ 320px - 575px */

  @media (min-width: 320px) and (max-width: 575px) {
    #signup-signin {
      max-width: 350px;
      margin: 30px auto;
    }
    .tab {
      padding: 17px;
      font-size: 14px;
    }
    #signup-signin-content {
      padding: 15px;
    }
    #sign-in-btn {
      padding: 10px 15px;
    }
    #login-with-gg-fb {
      flex-direction: column;
    }
    #login-with-gg-fb button {
      width: 100%;
      margin-bottom: 8px;
    }
  }

  /* an mui ten input number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default LoginStyled;
