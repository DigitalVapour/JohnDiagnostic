import { getDoctors } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Team(){
const doctors = await getDoctors();
console.log(doctors)

    return <>
    <div className="container">
    <h2 className="pb-2 border-bottom text-center"><i className="bi bi-dash-lg text-danger"></i>Our Doctors <i className="bi bi-dash-lg text-danger"></i></h2>

    <div className="row">        
      {
        doctors.map((doctor) => (
          <div key={doctor._id} className="col-lg-4 text-center">
            <Image className="bd-placeholder-img rounded-circle"  src={doctor.image} width={140} height={140} alt={doctor.name} /> 
            <h2 className="fw-normal">{doctor.name}</h2>
            <p>{doctor.designation}</p>
            <p><a className="btn btn-danger" href="#">View details »</a></p>
          </div>
        ))
      }  
     
    </div>
  </div>
    </>
}