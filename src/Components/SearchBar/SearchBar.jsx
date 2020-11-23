import React, { Component, Fragment } from 'react';
import "./SearchBar.css";

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={ term:''};
    }


    handleChange=(e)=>{
        this.setState({term:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);


        
    }

    render(){
        return(
            <Fragment>
             <section >
                 
                 <article >

                     <form onSubmit={this.handleSubmit}>

                         <input type="text" className="form-control" placeholder="search" value={this.state.term} onChange={this.handleChange}/>
                         
                             <span className="searchIcon">
                             <i class=" fa fa-search" aria-hidden="true"></i>
                             </span>
                         
                     </form>
                 </article>
                 
             </section>

            </Fragment>
        )
    }
}
