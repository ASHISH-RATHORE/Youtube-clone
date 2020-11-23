import React, { Component, Fragment } from 'react';
import "./Right.css";


class Right extends Component {
   
    constructor(props) {
        super(props);
        this.state={};
    }
    
    render() {
        return (
           <Fragment>
               <section id="right">
                   <article className="rightBlock">
                       <span className="cam"><i className="fas fa-video"></i></span>
                       <span className="border"><i className="fas fa-border-none"></i></span>
                       <span className="dots"><i className="fas fa-ellipsis-v"></i></span>
                       <div className="signinBlock">
                          
                          <span> <button className="sign-button"><div className="user"><i className="far fa-user"></i></div>SIGN IN</button> </span>

                       </div>
                   </article>
               </section>
           </Fragment>
        );
    }
}

export default Right;

