import React from 'react';
import { FaFacebook, FaWhatsapp , FaPhone, FaRegEnvelope, FaYoutube , FaTwitter, FaLinkedin, FaAddressCard } from 'react-icons/fa';
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

				<div className="footer-icons">
					<a href="#" > <FaAddressCard></FaAddressCard> </a>
					<p><span> Head Office: 102/1 Motijheel Dhaka</span> </p>
				</div>

				<div className="footer-icons">
					<a href="#" > <FaPhone></FaPhone> </a> 
					<p>Hotline : 01515000000</p>
				</div>

				<div className="footer-icons" >
					<a href="#" > <FaRegEnvelope ></FaRegEnvelope> </a>
					<p> support@company.com </p>
				</div>

			</div>

			<div className="footer-right">
				<p className="footer-company-about">
					<span> Stay Connected With Us </span>
				</p>

				<div className="footer-icons">
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