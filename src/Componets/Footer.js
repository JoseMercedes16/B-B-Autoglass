import '../CSS/Footer.css'
import { FaInstagram,FaTwitter,FaYoutube,FaLinkedin,FaGooglePlus } from "react-icons/fa";


function Footer() {
    return (
        <div className="footer">
            <div className="footer-Content">
                <h3>
                    Hello Word
                </h3>
                <p>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                </p>
                <ul class="socials">
                    <li><a href="https://www.instagram.com/bb.autoglass/"><i class="fa fa-instagram"></i><FaInstagram/></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i><FaTwitter/></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i><FaGooglePlus/></a></li>
                    <li><a href="#"><i class="fa fa-youtube"></i><FaYoutube/></a></li>
                    <li><a href="#"><i class="fa fa-linkedin-square"></i><FaLinkedin/></a></li>
                </ul>
                <div className='footer-bottom'>
                    <p>copyright &copy;2021 <a href="#">foolishdeveloper</a>  </p>
                    <div class="footer-menu">
                        <ul class="f-menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/aboutUs">About</a></li>
                            <li><a href="/contactUs">Contact</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )

}
export default Footer