import Image from "next/image";
import { getCarouselImages } from "@/sanity/sanity-utils";

export default async function Slideshow(){
    const carouselImages = await getCarouselImages();

    return <>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {carouselImages.map((image)=>(
      <div key={image._id} className="carousel-item active" data-bs-interval="5000">
      <Image src={image.image} width={1920} height={1080} className="d-block w-100 h-100" alt="slideOne" />
    </div>
    ))}
        
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
}
