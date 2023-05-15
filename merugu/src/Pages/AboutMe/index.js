import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
export default function AboutMe(){
const [loader,setLoader]= useState (true);
const [aboutus,setAboutUs]= useState(null);
const connectToServer = async ()=> axios.get('http://localhost:8500/AboutUs')
                                  .then(res=>{
                                    console.log(res.data);
                                    setAboutUs(res.data);
                                    setLoader(false)
                                  }).catch(err=>console.log(err))
       useEffect(()=>{
        connectToServer();
       },[])                           
    return(

        <>
        <div>
    <h3><Typography>Name: RaviMerugu</Typography></h3>
    <h3><Typography>Father Name: JayaChander  </Typography></h3>
    <h3><Typography>Mother Name: Uma</Typography></h3>
    <h3><Typography>Email: ravimerugu0408@gmail.com</Typography></h3>
    <h3><Typography>Phone No: 9502945060</Typography></h3>

    </div>
        </>
    )
}