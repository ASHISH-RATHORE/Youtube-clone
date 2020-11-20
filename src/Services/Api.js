
import axios from 'axios'; 

const KEY="AIzaSyAX0FPW4wOZsE5p_kEruaVRpvLf_g7FIQI";

 export const baseParams= {
     part:'snippet',
     maxResults:15,
     key:KEY,
 };
 export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3'

 });


// axios.create === config purpose

















 