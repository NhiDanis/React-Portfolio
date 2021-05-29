// eslint-disable-next-line
import React, { Component } from "react";
import { Grid } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto", height: "100%" }}>
        <Grid className="home-grid" style={{ height: "100%" }}>
          <div className="banner">
            <h1 style={{ fontFamily: "Almarai", wordSpacing: "10px" }}>
              <strong>Welcome to My Portfolio!!</strong>
            </h1>
            <h2 style={{ fontFamily: "Monoton", wordSpacing: "10px" }}>
              Nhi Danis
            </h2>
            <h3>
              <strong>I'm a Full-Stack Developer </strong>{" "}
            </h3>
            <h5>HTML/CSS | Bootstrap | JavaScript | React </h5>
            <div className="social-media">
              <a
                href="https://github.com/NhiDanis"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/nhi-danis-b17883128/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              <a
                href="https://stackoverflow.com/users/13991472/nhi-danis"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-stack-overflow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Home;
