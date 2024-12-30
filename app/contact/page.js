export default function Contact(){
    return <>
    <div className="px-4 py-5 my-5 text-center">    
    <h1 className="display-5 fw-bold text-body-emphasis">welcome to John Diagnostic Centre</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4"><span className="fw-bold">Address : </span> Harali Udaynarayanpur Road, Udaynarayanpur, Howrah</p>
      <p className="lead mb-4"><span className="fw-bold">Phone : </span> 9733833516 / 9433514608</p>
      <p className="lead mb-4"><span className="fw-bold">Email : </span> Johndiagnostic@gmail.com</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-danger btn-lg px-4 gap-3">Call Us</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Mail Us</button>
      </div>
    </div>
  </div>
    </>
}