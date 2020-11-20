import React, { Component, Fragment } from 'react';
import "./HeaderComponent.css";
import SearchBar from "../SearchBar/SearchBar";
 

export default class HeaderComponent extends Component{
     constructor(props){
         super(props);
         this.state={ };
     };

     



     render(){
         console.log(this.props);
         return(
             <Fragment>
          <section id="HeaderBlock">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <span className="bars"><i class="fal fa-bars"></i></span>
        <a className="navbar-brand" href="#"><img src="/logo.jpg" className="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <section className="collapse navbar-collapse" id="navbarNav">
          <article className="customBlockHeader">
          <div className="seachBlock"><SearchBar onTermSubmit={this.props.onTermSubmit}/></div>
          <div className="menuBlock">right menu </div>
          
          </article>
        </section>
      </nav>
      </section>
             </Fragment>
         )
     }
 }