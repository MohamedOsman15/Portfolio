import { Link } from "react-router-dom"

const Nav = () => {


    return (
        <div className="nav">
            <h1>Mohamed Osman</h1>
            <h3>Full Stack Software Developer</h3>
            <div className="navigation">
                <Link to="/about" className="navLinks"><h2>About Me</h2></Link>
                <Link to="/projects" className="navLinks"><h2>Projects</h2></Link>
                <a className="navLinks" target="_blank" href="https://docs.google.com/document/d/1j-O1gi_dqOeUpq31YQ2F0szdjtfDIdEBdZKh3kt3CsY/edit?usp=sharing"><h2>Resume</h2></a>
            </div>
        </div>
    )
}

export default Nav