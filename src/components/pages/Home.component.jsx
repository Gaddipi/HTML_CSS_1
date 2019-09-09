import React from "react";
import Owl from "../../photos/owl.png";
import Nav from "../nav/nav.component";
import "./Home.style.css";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="body">
            <img className="body-logo" src={Owl} alt="bird" />
            <div className="headertext">
              <h1>Discover. Learn. Elevate.</h1>
            </div>
            <div className="body-text">
              <p>
                Introducing the best pratices, stories, and insights from the
                world's top design leaders. Loaded with in-debth books,
                podcasts, and more, DesignBetter.Co is your essential guide to
                building remarkable products and teams
              </p>
            </div>

            <button>Start Exploring</button>
            <div className="scroll">
              <p>Scroll</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
