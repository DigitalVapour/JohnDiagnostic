import { getServices } from "@/sanity/sanity-utils"
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function Services(){

const services = await getServices();
    return <>
    <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom text-center"><i className="bi bi-dash-lg text-danger"></i> Our Services <i className="bi bi-dash-lg text-danger"></i></h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {services.map((service) => (
        <div key={service._id} className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient px-2 fs-2 mb-3">        
        <Image src={service.image} alt="Image" width={80} height={80}></Image>
        </div>
        <h3 className="fs-2 text-body-emphasis">{service.name}</h3>
        <PortableText value={service.content} />        
        <a href="#" className="icon-link text-danger">
          Read more
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
      ))}
      
      
   
    </div>
  </div>
    </>
}