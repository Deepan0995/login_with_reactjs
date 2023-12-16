import React, { useEffect } from "react";
import "./styles/dashboard.css";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userData");

    navigate("/");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      navigate("/");
    } else {
      document.getElementById("LoggedInUser").innerHTML = userData.username;
    }
  });
  return (
    <>
      <div className="main">
        <div className="navbar-side">
          <h6>
            <span className="link-text">Dashboard</span>
          </h6>
          <ul>
            <li>
              <Link
                className="myBtn"
                data-toggle="collapse"
                data-target="#my-sub"
                title="Post"
                aria-expanded="false"
              >
                <span className="icon">
                  <i className="fas fa-list"></i>
                </span>
                <span className="link-text">Post</span>
                <span className=""></span>
              </Link>
              <div id="my-sub" className="collapse bg-secondary">
                <Link title="All Post">
                  <span className="icon">
                    <i className="fas fa-copy"></i>
                  </span>
                  <span className="link-text">All Post</span>
                </Link>
                <Link title="Add Post">
                  <span className="icon">
                    <i className="fas fa-pen-fancy"></i>
                  </span>
                  <span className="link-text">Add Post</span>
                </Link>
              </div>
            </li>
            <li>
              <Link title="Category">
                <span className="icon">
                  <i className="fas fa-list-alt"></i>
                </span>
                <span className="link-text">Category</span>
              </Link>
            </li>
            <li>
              <Link title="Comment">
                <span className="icon">
                  <i className="fas fa-comment"></i>
                </span>
                <span className="link-text">Comment</span>
              </Link>
            </li>
            <li>
              <Link title="Tags">
                <span className="icon">
                  <i className="fas fa-tags"></i>
                </span>
                <span className="link-text">Tags</span>
              </Link>
            </li>
            <li>
              <Link title="Profile">
                <span className="icon">
                  <i className="fas fa-user-circle"></i>
                </span>
                <span className="link-text">Profile</span>
              </Link>
            </li>
            <li>
              <Link title="Setting">
                <span className="icon">
                  <i className="fas fa-cog"></i>
                </span>
                <span className="link-text">Setting</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <nav className="navbar navbar-dark bg-dark py-1">
            <Link id="navBtn">
              <span id="changeIcon" className="fa fa-bars text-light"></span>
            </Link>

            <div className="d-flex">
              <Link className="nav-link text-light px-2">
                <i className="fas fa-search"></i>
              </Link>
              <Link className="nav-link text-light px-2">
                <i className="fas fa-bell"></i>
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                className="nav-link text-light px-2"
              >
                {" "}
                <span className="   link-text p-3">
                  <i className="mr-2 fas fa-sign-out-alt"></i>Logout
                </span>
              </Link>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="col">
              <div className="col p-2">
                <h1>
                  Welcome,{" "}
                  <span
                    style={{ color: "green", textTransform: "capitalize" }}
                    id="LoggedInUser"
                  ></span>
                  !
                </h1>
              </div>
            </div>
            <div className="col">
              <div className="col p-2">
                <h2>Recent Activity</h2>
                <p>No recent activity to display.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 p-2">
                <div className="jumbotron rounded-0">
                  <h1 className="display-4">Hello World</h1>
                  <p className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repudiandae, recusandae maiores
                  </p>
                  <hr className="my-4" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, voluptatem ea similique ratione vero mollitia
                    accusantium! Eius amet minus dolorum sint odio ut ipsam
                    temporibus necessitatibus blanditiis quidem, iusto
                    doloremque!
                  </p>
                  <Link className="btn btn-primary btn-lg rounded-0">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 p-2">
                <div className="jumbotron rounded-0">
                  <h1 className="display-4">Hello World</h1>
                  <p className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repudiandae, recusandae maiores
                  </p>
                  <hr className="my-4" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, voluptatem ea similique ratione vero mollitia
                    accusantium! Eius amet minus dolorum sint odio ut ipsam
                    temporibus necessitatibus blanditiis quidem, iusto
                    doloremque!
                  </p>
                  <Link className="btn btn-primary btn-lg rounded-0">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
