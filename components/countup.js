"use client"

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function Countsection(){

const [counton, setCounton] = useState(false);

    return <>
    <div className="container-fluid  my-4 text-center bg-body-secondary">
    <ScrollTrigger onEnter={()=>setCounton(true)} onExit={()=>setCounton(false)}>
        <div className="d-flex flex-row py-4 text-danger">
        <div className="col">
        <h1>
        {counton && <CountUp start={0} end={950} duration={3} delay={0} /> }+       
    </h1>
    <p>Happy Customer</p>
        </div>
        <div className="col">
        <h1>
        {counton && <CountUp start={0} end={20} duration={2} delay={0} /> }+       
    </h1>
    <p>Useful Services</p>
        </div>
        <div className="col">
        <h1>
        {counton && <CountUp start={0} end={30} duration={3} delay={0} /> }+       
    </h1>
    <p>Years of Experience</p>
        </div>
        <div className="col">
        <h1>
        {counton && <CountUp start={0} end={10} duration={3} delay={0} /> }+       
    </h1>
    <p>Doctors</p>
        </div>
        </div>
   
    </ScrollTrigger>
    </div>
    </>
}