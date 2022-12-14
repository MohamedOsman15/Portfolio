import { NavLink } from "react-router-dom"

const Nav = () => {


    return (
        <div className="nav">
            <NavLink to="/" className="navLinks"><h1>Mohamed Osman</h1></NavLink>
            <div className="navigation">
                <NavLink to="/about" className={({ isActive }) => (isActive ? "link-active" : "navLinks")}><h2>About Me</h2></NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? "link-active" : "navLinks")}><h2>Projects</h2></NavLink>
                <a className="navLinks" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/14VMhTJaiTcUWomMeezH03_0vcLRVj7QwhuPnhu347MI/edit?usp=sharing"><h2>Resume</h2></a>
            </div>
        </div>
    )
}

export default Nav