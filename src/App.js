import React, { Component, Fragment } from 'react';
import HeaderComponent from './Components/YoutubeHeader/HeaderComponent';
import axios from 'axios';
import api,{baseParams} from './Services/Api';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
        };
    }

    onTermSubmit=async (term)=>{
        let response= await api.get("/search",{params:{q:term,...baseParams},});
       console.log(response);
    };
    


    render(){
        return(
            <Fragment>
                <header ><HeaderComponent onTermSubmit={this.onTermSubmit}/></header>
                
            </Fragment>
        )
    }
}

