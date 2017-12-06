import React, { Component } from "react";
import carDamage from "./carDamage.png";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import "./Home.css";

class NavbarHome extends Component{
	render() {
    
		return (
                <header>
					<div className="container">
                      <div className="row">
                        <div className="col-md-1 col-xs-1 text-center">
                            <a href="javascript:window.history.back();">
                                <i className="fa fa-chevron-left arrow" aria-hidden="true" />
                              </a>
                        </div>
                        <div className="col-md-10 col-xs-10 text-center">
                                <h2 className="titleCar">Fotos de Daños</h2><br/><br/>
								<div className = "infoDamage">
                                <h3 >Instrucciones:</h3>
								<h4>
								Colóquese a 2 metros de distancia del auto para capturar las imágenes
								</h4>
								</div>
                        </div>
						<div className="col-xs-12 text-center">
							<div className="col-md-2 col-xs-2"><img src={carDamage} /></div>
						</div>                                
                        </div>
                    </div>
                </header>
);
}}



class Photos extends Component{
	render(){
		return(
			<div className="AddPhoto">
				<div className="text-center">
				<NavLink to={"/camera"} className="col-xs-7 text-center add">Añadir foto...</NavLink>
					<div className="col-xs-3">
						<NavLink to={"/camera"} className="btnAdd"><i className="fa fa-plus-square-o" aria-hidden="true"></i></NavLink>
					</div>
				</div>
			</div>
		);
	}
}


class AddPhoto extends Component{
	render () {
		return(
			<div className="container">
					<div className=" row">
						<NavbarHome/>
        				<br/>
						<Photos/>
					</div>
			</div>
		);
	};
}

export default AddPhoto ;
