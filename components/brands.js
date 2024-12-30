import Image from "next/image";

export default function Brands(){
    return <>
    <div className="container-fluid my-4 row text-center bg-body-secondary">
        <div className="col-xl-2 py-4">
        <Image  src="/Asset/Logos/Tenet Healthcare.png" width={70} height={70} alt="BrandImage" />
        </div>
        <div className="col-xl-2 py-4">
        <Image  src="/Asset/Logos/University of Utah Health Care.png" width={70} height={70} alt="BrandImage" />
        </div>
        <div className="col-xl-2 py-4">
        <Image  src="/Asset/Logos/Molina Healthcare.png" width={70} height={70} alt="BrandImage" /> 
        </div>
        <div className="col-xl-2 py-4">
        <Image  src="/Asset/Logos/Kindred Healthcare.png" width={70} height={70} alt="BrandImage" /> 
        </div>
        <div className="col-xl-2 py-4">
        <Image  src="/Asset/Logos/Cigna Healthcare.png" width={70} height={70} alt="BrandImage" />
        </div>
        <div className="col-xl-2 py-4">
        <Image  src="/Asset/Logos/HCA Healthcare.png" width={70} height={70} alt="BrandImage" />
        </div>     
        
    </div>
    </>
}