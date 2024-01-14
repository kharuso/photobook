import './footer.css'
import { FaRegCopyright } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";


const Footer = () => {
  return (
    <div className="footer__container">
        <small>Kharuso<FaRegCopyright />2024</small>
        <ul className="socials">
            <li><a href="#" className="social__link"><CiLinkedin /></a></li>
            <li><a href="#" className="social__link"><IoLogoGithub /></a></li>
            <li><a href="#" className="social__link"><CgMail /></a></li>
        </ul>
    </div>
  )
}

export default Footer
