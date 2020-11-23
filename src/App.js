import React, { Component, Fragment } from 'react';
import HeaderComponent from './Components/YoutubeHeader/HeaderComponent';
import axios from 'axios';
import api,{baseParams} from './Services/Api';
import VideoDetails from './Components/YoutubeVideos/VideoDetails';
import VideoList from './Components/YoutubeVideos/VideoList';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null,
        };
    }

    onTermSubmit=async (term)=>{
        let response= await api.get("/search",{params:{q:term,...baseParams},});
       this.setState({videos:response.data.items,
                     selectedVideo:response.data.items[0], });
    };
    
    OnVideoSelect= async video=>{
        this.setState({selectedVideo:video});
    }

    componentDidMount(){
        this.onTermSubmit("react js");
    }


    render(){
        return(
            <Fragment>
                <header ><HeaderComponent onTermSubmit={this.onTermSubmit}/></header>
                <main className="containerBlock my-3">
                    <article className="row">
                        <div className="videoPlayerBlock col-md-8"><VideoDetails video={this.state.selectedVideo} 
                                                                             /></div>
                        <div className="videoListBlock col-md-4"><VideoList videos={this.state.videos} 
                                                                             OnVideoSelect={this.OnVideoSelect}/></div>
                    </article>
                </main>
                
            </Fragment>
        )
    }
}

