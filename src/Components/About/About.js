import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../images/about/saint1.jpg';
import pic2 from '../../images/about/saint2.jpg';
import pic3 from '../../images/about/saint3.jpg';
import pic4 from '../../images/about/saint4.jpg';
import './About.css';


const About = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <br />
            <div className='container App'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {/* 1 */}
                    <Carousel.Item>
                        <img
                        className="d-block imgControl w-100"
                        src={pic1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    {/* 2 */}
                    <Carousel.Item>
                        <img
                        className="d-block imgControl w-100"
                        src={pic2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    {/* 3 */}
                    <Carousel.Item>
                        <img
                        className="d-block imgControl w-100"
                        src={pic3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    {/* 4 */}
                    <Carousel.Item>
                        <img
                        className="d-block imgControl w-100"
                        src={pic4}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='pStyle' >
                    <br />
                    <h3 className='text-success' >About ARS Travels</h3>
                    <p>
                        ARS Travels is leading tour operator of Bangladesh. ARS Travels established in 2009 with a view to develop 
                        sustainable tours to various destinations in this beautiful Bangladesh and as such you can meet the generous peoples 
                        of this country. Our team is committed to give you a new light of tourism experiences which you had never before. We 
                        are not only for tour operator, our Established Software company, This company provide many product-
                        is  travel related and others kinds of software. ARS Travels provides inbound and outbound tour operate. Inbound 
                        tours provide experience guide, standard and any category’s hotel, best tours spot selection and your security. Holidays
                         are meant for relaxation, to rejuvenate your energy moreover to spend your quality time with your loved ones and it is 
                         imperative to have the best Tour Operator to be your travel planner, who has got the experience, Infrastructure, commitment 
                         and who is a real professional to plan your valuable Tour. <br /> <br />
                        There’s no need to get bogged down in each and every tour operator’s website individually, because we can offer you Inbound 
                        tours Dhaka, Shundarban, Cox’sbazar, St.Mertin, Teknaf, Rangamati,  Khagrachori, Bandarbon, Chittagong, Sylhet. If you’d like
                         to find out a little more about some of the tour operators and 
                         holiday companies featured on our company. <br /> <br />
                        We are member of :- 
                        International Air Transport Association (IATA), <br />
                        Tour Operators Association of Bangladesh (TOAB), <br />
                        Association of Travel Agent of Bangladesh (ATAB), <br />
                        Bangladesh Outbound Tour Operators Association (BOTOA), <br />
                        The Pacific Asia Travel Association Bangladesh Chapter ( PATA). <br />
                    </p>
                    <p>
                        <b>What Can Amazing Tours Offer?</b> <br />
                        As a leading tour operator company in Bangladesh, you might think of Amazing Tours as a vast travel superstore
                         that presents brochure upon brochure of exciting opportunities for you to travel the globe. Not simply a 
                         tour operator, Amazing Tours actually acts as a massive online travel agency where you can search and book 
                         holidays from virtually any major holiday company you can think of, including big name tour operators such as
                          First Choice. <br /> <br />
                        We’re called ARS Travels because we feature holidays from every one of the Bangladesh’s leading tour operators. 
                        The massive choice and variety of Amazing Tours is what makes us as valuable to you as a holiday search tool! Add
                         to that our new Cruise section, which features the biggest Cruise operators in the world, and you begin to 
                         appreciate just what an incredible holiday resource you’ve discovered. <br />
                    </p>
                    <p>
                       <b> What Are The Benefits Of Choosing Amazing Tours?</b> <br />
                       In the competitive world of tour operate companies Amazing Tours is becoming increasingly well-known, thanks in no 
                       small part to the pure selection and value that we’ve mentioned. And rather than search every tour operator on the 
                       Internet, an increasing number of people have realized that for the sake of convenience, there’s simply no beating 
                       the Amazing Tours. <br /><br />
                       There’s no need to get bogged down in each and every tour operator’s website individually, because we can offer you 
                       Dhaka, Shundarban, Cox’s Bazar, St.Mertin, Teknaf, Rangamati,  Khagrachori, Bandarbon, Chittagong, Sylhet and 
                       cruises all in one place, and from just about every holiday company you can think of. If you’d like to find out a 
                       little more about some of the tour operators and holiday companies featured on our company.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;