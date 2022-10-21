import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Navbar() {
    let location = useLocation();
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class='navbar-brand' to="/">Singhaniya</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <Link class={`nav link ${location.pathname === "/" ? 'active' : ""}`} aria-current="page" href="#">Home</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link class={`nav-link ${location.pathname === "/Project" ? 'active' : ""}`} to="/Project">Project</Link>
                            </li>
                            

                            <li className='nav-item'>
                                <Link className={`nav-link ${location.pathname === "/Features" ? 'active' : ""}`} to="/Features">Features</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${location.pathname === "/About" ? 'active' : ""}`} to="/About">About</Link>
                            </li>


                            <li class="nav-item">
                                <Link class={`nav-link ${location.pathname === "/Contact" ? 'active' : ""}`} to="/Contact">Conatct</Link>
                            </li>
                           
                        </ul>

                    </div>
                </div>s
            </nav>



            {/* <nav className="navbar navbar-expand-lg bg-dark text-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">Singhaniya</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                        <div className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <Link className="nav-link active" aria-current="page" to="/Project">Project</Link>
                            <Link className="nav-link" to="/Features">Features</Link>
                            <Link className="nav-link" to="/About">About</Link>
                            <Link className="nav-link" to="/Contact">Conatct</Link>
                        </div>
                    </div>
                </div>
            </nav>  */}
        </>
    )
}

export default Navbar