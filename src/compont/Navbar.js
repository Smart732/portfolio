import React from 'react'
import{Link} from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark text-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">Singhaniya</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <Link className="nav-link active" aria-current="page" to="/Project">Project</Link>
                            <Link className="nav-link" to="/Features">Features</Link>
                            <Link className="nav-link" to="/About">About</Link>
                            <Link className="nav-link" to="/Contact">Conatct</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar