import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import "./damage.css";
import Webcam from "react-webcam";

class HeaderPhoto extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-xs-1 text-center">
                <a href="javascript:window.history.back();">
                  <i className="fa fa-chevron-left arrow" aria-hidden="true" />
                </a>
              </div>
              <div className="col-md-10 col-xs-10 text-center">
                <h2 className="titleLocation">Fotos de daños</h2>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: null
    };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ imageSrc });
  };

  render() {
    return (
      <div className="container text-center">
        <HeaderPhoto />
        <Webcam
          audio={false}
          height={250}
          ref={this.setRef}
          screenshotFormat="image/png"
          width={250}
        />
        <div>
          <button className="capture" onClick={this.capture}>
            Capturar
          </button>
        </div>
        {this.state.imageSrc ? (
          <img className="screen" src={this.state.imageSrc} />
        ) : null}
        <br />
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <br/>
            <NavLink to={"/abstract"} className="btn Homebtn">
              Siguiente
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Camera;
