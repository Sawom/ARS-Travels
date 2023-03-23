import React from 'react';
import { FaFacebook, FaWhatsapp , FaYoutube , FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <br />
            <footer className="footer-distributed">

			<div className="footer-left">

				<h3>Company<span>logo</span></h3>

				<p class="footer-links">
					<a href="#" className="link-1">Home</a>
					<a href="#">See All Packages</a>
					<a href="#">About</a>
					<a href="#">Faq</a>
				</p>

				<p className="footer-company-name">Company Name © 2023</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span> Head Office: 102/1 Motijheel Dhaka</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>Hotline : 01515000000</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span> Stay Connected With Us </span>
				</p>

				<div class="footer-icons">
					<a href="#"> <FaFacebook></FaFacebook> </a>
					<a href="#"> <FaWhatsapp></FaWhatsapp> </a>
					<a href="#"> <FaYoutube></FaYoutube> </a>
					<a href="#"> <FaTwitter></FaTwitter> </a>
                    <a href="#"> <FaLinkedin></FaLinkedin> </a>
				</div>

			</div>

		</footer>
        </div>
    );
};

export default Footer;