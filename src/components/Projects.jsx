import fisher from '../images/project_images/ss.png'
import reviews from '../images/project_images/bikinibottom.png'
import insta from '../images/project_images/insta.PNG'

const Projects = () => {
    return (
        <div className="projects">
            <h2 className='title'>Hover over each image for more information</h2>
            <div className="project first">
                <img className="projectImg" src={fisher} alt="FisherFinder" />
                <div className='content'>
                    <h2>Fisher Finder</h2>
                    <p>A social app where users can share and view different fishing spots geographically</p>
                    <a className="links" target="_blank" rel="noreferrer" href="https://fisherfinder.herokuapp.com/"><p>Link to live site</p></a>
                    <h3>Technologies:</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Node.js with Express</p>
                    <p>React.js Front-End</p>
                    <p>MongoDB for database management</p>

                </div>
            </div>
            <div className="project">
                <img className="projectImg"  src={reviews} alt="Bikini Bottom Reviews" />
                <div className='content'>
                    <h2>Bikini Bottom Reviews</h2>
                    <a className="links" rel="noreferrer" target="_blank" href="https://bikini-bottom-yelp.herokuapp.com/"><p>Link to live site</p></a>
                    <h3>Technologies:</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Node.js with Express</p>
                    <p>React.js Front-End</p>
                    <p>PostgresSQL for database management</p>
                </div>
            </div>
            <div className="project">
                <img className="projectImg" src={insta} alt="Insta Clone" />
                <div className='content'>
                    <h2>InstaClone</h2>
                    <a className="links" href="https://instaclone.up.railway.app/" target="_blank" rel="noreferrer">Link to live site</a>
                    <h3>Technologies:</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Node.js with Express</p>
                    <p>React.js Front-End</p>
                    <p>PostgresSQL for database management</p>
                </div>
            </div>
        </div>
    )
}

export default Projects