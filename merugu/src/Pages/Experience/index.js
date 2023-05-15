import {useState,useEffect} from 'react';
import axios from'axios';
export default function Experience(){
    const [loader,setLoader] = useState(true);
    const [qualifications,setQualifications]= useState (null);
    const connectToServer = async ()=> axios.get('http://localhost:8500/Experience')
                                          .then(res=>{
                                            console.log(res.data);
                                            setQualifications(res.data);
                                            setLoader(false)
                                        }) .catch(err=>console.log(err))
 useEffect(()=>{
    connectToServer();
 })
    return(
        <>
        fresher
        </>
    )
}