import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaFacebook, FaWhatsapp , FaPhone, FaRegEnvelope, FaYoutube , FaTwitter, FaLinkedin, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/Firebase';
import LOGO from '../../../images/logo.png';
import './Footer.css';


const Footer = () => {
	 const [user] = useAuthState(auth);
    return (
        <div>
            <br />
            <footer className="footer-distributed">

			<div className="footer-left">
				
				<div>
                    <span className='txt' > User: {user?.displayName && user.displayName} </span> <br />
                    <span className='txt' > User id: {user?.uid && user.uid}</span> <br /> <br />
                </div>
				<img height={200} src={LOGO} alt="" />
				<p className="footer-links">
					<Link as={Link} className='menue link-1' to="/home"> Home </Link>
					<Link as={Link} className='menue ' to="/about"> About </Link>
					<Link as={Link} className='menue ' to="/packages"> See All Packages  </Link>
				</p>
			</div>

			<div className="footer-center pStyle">
				<p>Contact Us</p>
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
					<p> support@ars.com </p>
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