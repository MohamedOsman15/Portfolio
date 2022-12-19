import github from '../images/25231.png'
import linkedin from '../images/174857.png'
import email from '../images/email-logo-png-27.png'

const Links = () => {
    

    return (
        <div className='footer'>
            <div className='footerLinks'>
            <a target="_blank" rel="noreferrer" href="https://github.com/MohamedOsman15" ><img  className='footerLinks' src={github} alt="LinkedIn" /></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mohamed-aosman/" ><img className='footerLinks' src={linkedin} alt="LinkedIn" /></a>
            <a href="mailto:osman.mohamed2244@gmail.com" ><img className='footerLinks' src={email} alt="LinkedIn" /></a>
            </div>
        <div className="copyright">
            <p>©2022 Mohamed A. Osman</p>
        </div>
        </div>
    )
}   

export default Links