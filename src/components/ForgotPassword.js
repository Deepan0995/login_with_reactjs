import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router

const ForgotPassword = () => {
  return (
    <div
      className=" container "
      style={{
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.4)",
        marginTop: "5%",
      }}
    >
      <div className="container   ">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default  d-flex  justify-content-center ">
              <div className="panel-body">
                <div className="text-center">
                  <h3>
                    <i className="fa fa-lock fa-4x"></i>
                  </h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
                    <form
                      id="forgot-password-form"
                      role="form"
                      autoComplete="off"
                      className="form"
                      method="post"
                    >
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            id="email"
                            name="email"
                            placeholder="Email address"
                            className="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-lg btn-primary btn-block"
                          type="submit"
                        >
                          Reset Password
                        </button>
                      </div>
                      <input
                        type="hidden"
                        className="hide"
                        name="token"
                        id="token"
                        value=""
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
