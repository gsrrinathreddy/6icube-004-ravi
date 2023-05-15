import {useState,useEffect} from 'react';
import axios from'axios';
export default function Hobbies(){
    const [loader,setLoader] = useState(true);
    const [hobbies,setHobbies]= useState (null);
    const connectToServer = async ()=> axios.get('http://localhost:8500/Hobbies')
                                          .then(res=>{
                                            console.log(res.data);
                                            setHobbies(res.data);
                                            setLoader(false)
                                        }) .catch(err=>console.log(err))
 useEffect(()=>{
    connectToServer();
 })
    return(
        <>
        cricket
        </>
    )
}