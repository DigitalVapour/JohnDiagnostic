import Link from "next/link"
import { getNavItems } from "@/sanity/sanity-utils"
import Image from "next/image";

export default async function Navbar(){
  const navItemsArr = await getNavItems();
  const navItems = navItemsArr[0];
  
    return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-danger fw-bold" href="/"><Image src={navItems.logo} alt="Logo" width={25} height={25} /> {navItems.companyName} </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">Contact Us</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Diagnostic Pathology</a></li>
            <li><a className="dropdown-item" href="#">Clinical Pathology</a></li>
            <li><a className="dropdown-item" href="#">Consultative Services</a></li>
            <li><a className="dropdown-item" href="#">Specialized Testing</a></li>
          </ul>
        </li>         */}
      </ul>
      <div className="d-flex">
      <div className="nav-item">
          <span className="nav-link"><i className="bi bi-telephone"></i> {navItems.phoneNumber} </span>
        </div>
      </div>
    </div>
  </div>
</nav>
    </>
}