const Navbar = () => {
    return (
        <div>
            {/* Navbar CSS */}
            <style>{`
                .navbar {
                    position: absolute;
                    width: 100%;
                    background-color: transparent !important; /* Set background color to transparent */
                    backdrop-filter: blur(10px); /* Apply blur effect */
                    -webkit-backdrop-filter: blur(10px); /* Apply blur effect for Safari */
                    z-index: 1000; /* Ensure the navbar stays on top of other elements */
                }

                .navbar-nav .nav-link {
                    color: black !important; /* Change text color for navbar links to black */
                    font-weight: 500; /* Font weight for navbar links */
                    position: relative; /* Position relative for the links */
                }

                .navbar-nav .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px; /* Adjust as needed */
                    left: 0;
                    width: 0;
                    height: 2px; /* Height of the line */
                    background-color: #3e78ff; /* Blue color for the line */
                    transition: width 0.3s ease; /* Transition effect */
                }

                .navbar-nav .nav-link:hover::after {
                    width: 100%; /* Expand the line width on hover */
                }

                .navbar-toggler {
                    border-color: #fff; /* Color of the toggler icon */
                }

                .navbar-toggler-icon {
                    background-color: #fff; /* Background color of the toggler icon */
                }

                .navbar-toggler-icon:focus {
                    outline: none; /* Remove focus outline from toggler icon */
                }

                /* Added styles */
                .navbar-brand-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .nav-link .dropdown-toggle{
                    color: black !important;
                }

            `}</style>

            {/* Navbar JSX */}
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-0">
                <div className="navbar-brand-wrapper"> {/* Added wrapper */}
                    <a href="/" className="navbar-brand ms-2">
                        <h2 className="mb-2 text-black">Moon navigation</h2>
                    </a>
                </div>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        {/* New Link */}
                        <a href="refrence" className="nav-item nav-link">Reference</a>
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/about" className="nav-item nav-link">About</a>
                        <a href="/service" className="nav-item nav-link">Services</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu fade-up m-0">
                                <a href="/price" className="dropdown-item">Pricing Plan</a>
                                <a href="/feature" className="dropdown-item">Features</a>
                                <a href="/quote" className="dropdown-item">Free Quote</a>
                                <a href="/testimonial" className="dropdown-item">Testimonial</a>
                                <a href="/404" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="/contact" className="nav-item nav-link ">Contact</a>


                    </div>
                    <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-headphones text-primary me-3"></i>+012 345 6789
                    </h4>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
