import React, { useState } from 'react';

const ContactForm = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        message: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        //send data to backend
    }

    return (
        <>
            {/* <!-- Contact Start --> */}
            <div className="container-xxl py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-secondary text-uppercase mb-3">Contact us anytime</h6>
                            <h1 className="mb-5">Contact Us</h1>
                            <p className="mb-5">Feel free to reach out to us with any inquiries or concerns. We're here to help!</p>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                                <div className="ps-4">
                                    <h6>Call for any queries!</h6>
                                    <h3 className="text-primary m-0">+012 345 6789</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control border-0" placeholder="First Name" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control border-0" placeholder="Last Name" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control border-0" placeholder="Company Name" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control border-0" placeholder="Company Email" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control border-0" placeholder="Message" rows="5"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    );
}

export default ContactForm;
