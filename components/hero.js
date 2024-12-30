import Image from "next/image";
import { getHeroSection } from "@/sanity/sanity-utils";

export default async function Hero(){
  const hero = await getHeroSection();
  const heroData = hero[0];
    return <>
  <div className="container col-xxl-8 px-4 py-2">
    <div className="row flex-lg-row-reverse align-items-center g-2 py-5">
      <div className="col-lg-6">
        <Image src={heroData.image} className="d-block mx-auto img-fluid" alt="HeroImage" width={1500} height={1500} />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{heroData.heading}</h1>
        <p className="lead">{heroData.paragraph}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-danger btn-lg px-4 me-md-2">Test Now</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
    </>
}