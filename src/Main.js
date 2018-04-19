import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <div >
                <HashRouter>
                    <div className="page-container">
                        <nav>
                            <div className="navWide">
                                <ul >
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>
                            <div className="navNarrow">
                                <i
                                    className="fa fa-bars fa-2x"
                                    onClick={this.burgerToggle}
                                />
                                <div  className="narrowLinks">
                                <ul>
                                    <li><a href="#" onClick={this.burgerToggle}>
                                        Home
                                    </a></li>
                                    <br />
                                    <li><a href="#/stuff" onClick={this.burgerToggle}>
                                        Stuff
                                    </a></li>
                                    <br />
                                    <li><a href="#/contact" onClick={this.burgerToggle}>
                                        Contact
                                    </a></li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                        
                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route path="/stuff" component={Stuff} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }


    burgerToggle() {
        let linksEl = document.querySelector(".narrowLinks");
        linksEl.classList.toggle("show");
        /*
        if (linksEl.style.display === "block") {
            linksEl.style.display = "none";
        } else {
            linksEl.style.display = "block";
        } */
    }
}

export default Main;
