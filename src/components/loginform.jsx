import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    fillRememberedCredentials();
  }, []);

  const rememberMeHandler = () => {
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }
  };

  const fillRememberedCredentials = () => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  };
  const submitForm = (event) => {
    event.preventDefault();
    rememberMeHandler();

    const url = `http://localhost:8080/api/login?email=${email}&password=${password}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/dashboard");
      })
      .catch((error) => {
        alert(`Unable to log in, Error: ${error.message}`);
      });
  };
  return (
    <div
      className=" container "
      style={{
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.4)",
        marginTop: "5%",
      }}
    >
      <div className="row  justify-content-sm-center px-3 mt-5">
        <div className="col-md-6 ">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
              alt="logo"
              className="img-fluid p-2 mt-5"
            />
          </div>
        </div>
        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
          <div className=" shadow-lg pt-5 ">
            <div className="card-body p-5">
              <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>

              <form id="loginForm" autoComplete="off" onSubmit={submitForm}>
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="invalid-feedback">Enter Valid Email</div>
                </div>

                <div className="mb-3">
                  <div className="mb-2 w-100">
                    <label className="text-muted" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="invalid-feedback">Password is required</div>
                </div>

                <div className="d-flex justify-content-left">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember"
                      className="form-check-input"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember" className="form-check-label">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <Link to={"/forgotPassword"} >Forgot Password</Link>
                </div>
              </form>
            </div>
            <div className="card-footer py-3 border-0">
              <div className="text-center">
                Don't have an account?
                <Link to={"/register"}> Create One</Link>
              </div>
            </div>
            <div className=" py-3 ">
              <div className="text-center mt-4 text-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
