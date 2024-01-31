import React from 'react';

const Navbar = () => {
    return (
        <div className="page-bg-top inner-page-bg-top">
            <header className="clear-fix">
                <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                    <div className="container">
                        <a className="navbar-brand d-inline-block" href="#">
                            <img src="assets/images/logo-white.webp" alt="" className="img-fluid logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fa fa-bars"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav mx-auto justify-content-md-end">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about-institute">
                                        About Institute
                                    </a>
                                </li>
                                {/* Add more list items as needed */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
