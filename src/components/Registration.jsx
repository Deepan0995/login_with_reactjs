import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the name is 'gender', convert the value to uppercase
    const updatedValue = name === "gender" ? value.toUpperCase() : value;
    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
  };
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/");
        alert("Registration successful");
        console.log("Registration successful");
      } else {
        // Registration failed, handle errors
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration", error);
    }
  };
  const containerStyle = {
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.4)",
    marginTop: "5%",
  };
  return (
    <div className="container " style={containerStyle}>
      <div className="mt-5 row justify-content-center  ">
        <div className="col-md-10 ">
          <div className="row">
            <div className="col-md-6 ">
              <div>
                <img
                  src="https://www.ejmr.org/images/services/user-registration.png"
                  alt="Registration Logo"
                  className="img-fluid p-5 mt-5"
                />
              </div>
            </div>
            <div className="col-md-6  p-2">
              <div className=" text-center p-3">
                <h1>Create Account</h1>
              </div>
              <form className="m-4" onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-3">
                  <label className="form-label" htmlFor="username">
                    User Name
                  </label>
                  <input
                    className="form-control"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    id="username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    id="password"
                    required
                  />
                </div>
                <div className="d-flex ">
                  <div className="mb-3  ">
                    <label className="form-label " htmlFor="mobile">
                      Mobile
                    </label>
                    <input
                      className="form-control  "
                      name="mobile"
                      type="text"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 ml-4 ">
                    <label className="form-label" htmlFor="address">
                      Gender
                    </label>
                    <div className="p-1  ">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="MALE"
                          id="male"
                          checked={formData.gender === "MALE"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="FEMALE"
                          id="female"
                          checked={formData.gender === "FEMALE"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="form-control"
                    name="address"
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <input type="submit" className="btn btn-primary mt-3" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
