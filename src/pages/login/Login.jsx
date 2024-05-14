import React, { useState } from "react";
import loginImg from "../../assets/login.svg";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eye-slash.svg";
import { toast } from "react-toastify";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import mainUrl from "../../api";

const Login = () => {
  let [openEye, setOpenEye] = useState(false);
  let navigate = useNavigate();
  const [username, setUsername] = useState("kminchelle");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("0lelplR");
  const handleLogin = (e) => {
    e.preventDefault();
    let user = { username, password };
    console.log(user);
    setLoading(true);
    mainUrl
      .post(`/auth/login`, user)
      .then((res) => {
        console.log(res.data);
        toast.success("GOOD JOB", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };
  function handleOpenEye() {
    setOpenEye(true);
  }
  function handleCloseEye() {
    setOpenEye(false);
  }
  return (
    <section id="login__hero" className="container">
      <div className="login__hero__left">
        <img src={loginImg} alt="" />
      </div>
      <div className="login__hero__right">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <form className="login__form" onSubmit={handleLogin} action="">
          <p className="error">Your password or email is incorrect</p>
          <div className="login__form__inputs">
            <input
              className="email__input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              type="text"
            />
            <div className="password__input">
              <input
                className="input__password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type={openEye ? "text" : "password"}
              />
              <div style={{ gap: "10px" }} className="eye__imges df">
                {openEye ? (
                  <img
                    onClick={handleCloseEye}
                    className="eye"
                    width="25"
                    src={eyeSlash}
                    alt=""
                  />
                ) : (
                  <img
                    onClick={handleOpenEye}
                    className="eye"
                    width="25"
                    src={eye}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          <div className="login__form__btns">
            <button
              className="form__login-btn"
            >
              {loading ? "loading..." : "Log in"}
            </button>
            <a className="form__login-forget" href="#">
              Forget password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
