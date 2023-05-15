import {useState,useEffect} from 'react';
import axios from'axios';
export default function Skills(){
    const [loader,setLoader] = useState(true);
    const [skills,setSkills]= useState (null);
    const connectToServer = async ()=> axios.get('http://localhost:8500/Skills')
                                          .then(res=>{
                                            console.log(res.data);
                                            setSkills(res.data);
                                            setLoader(flase)
                                        }) .catch(err=>console.log(err))
 useEffect(()=>{
    connectToServer();
 })
    return(
        <>
        react node
        </>
    )
}
