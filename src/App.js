import React from 'react';
import './App.scss';
import myvid from "./img/video.mp4";
import img from "./img/nat-8.jpg"
import bird from "./img/origami.png"

function App() {
  return (
    
    <div className="layout">
     
     <div className="navbar"> 
        <div className="navbar__menu">
            <img src={bird} class="fas fa-bars"alt=""/>
            {/* <i class="fas fa-bars"></i> */}
            </div>
        <div className="navbar__portfolio">Portfolio/CV </div>
       
        <div className="navbar__hire-me btn" ><a className="btn__text">Hire Me</a></div>
     </div>
     <div className="header">
     <div src="" alt="" className="header__image">
     <div className="mobile_header__text">
       <div className="mobile_text_box">
       <h1 className="mobile_text_header">Hi I'm Ofoe</h1>
       <p className="mobile_text_subheader">Kindly Scroll down to learn more about what i do</p>
       </div>
     </div>
     </div>
     <div className="header__text">
       <div className="text_box">
       <h1 className="text_header">Hi I'm Ofoe</h1>
       <p className="text_subheader">Kindly Scroll down to learn more about what i do</p>
       </div>
     </div>
     </div>
    <div className="section-about">
        <div className="card-container">
           <div className="card card__1">
                           <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">Want Mobile Apps?</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Quick Mobile development</li>
                                        <li>Beautiful UI</li>
                                        <li>Best Security</li>
                                        <li>Responsive app</li>
                                        <li>Fast search options</li>
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$10/hr</p>
                                    </div>
                                    <a href="#popup" className="btn-card btn-card-blue">Book now!</a>
                                </div>
                            </div>
    </div>

    <div className="card card__2">
                           <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">Best website designs</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Quick Mobile development</li>
                                        <li>Beautiful UI</li>
                                        <li>Best Security</li>
                                        <li>Responsive app</li>
                                        <li>Fast search options</li>
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$12/hr</p>
                                    </div>
                                    <a href="#popup" className="btn-card btn-card-green">Book now!</a>
                                </div>
                            </div>
    </div>
    <div className="card card__3">
                           <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">Secure Database </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Secured database</li>
                                        <li>Fast Dataresponse</li>
                                        <li>Best Security</li>
                                        <li>Ensure Safe Backup</li>
                                        
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$10/hr</p>
                                    </div>
                                    <a href="#popup" className="btn-card btn-card-orange">Book now!</a>
                                </div>
                            </div>
    </div>
    </div>
    </div>
    <section className="section-qualifications">
        <div className="bg-video">
            <video   className="bg-video__content" autoPlay muted loop >
            <source src={myvid} type="video/mp4" />
                        
                        Your browser is not supported!
            </video>
        </div>
        <div className="skewed-card">
              <div className="story">
                        <figure className="story__shape">
                            <img src={img} alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Best websites</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Why you should hire me?</h3>
                            <p>
                              I have the best templates already designed by me(.i.e no copy of it exists) to help accomplish the task quickly without building from scratch.My sole aim is to build quick and responsive websites 
                              that suits your taste with regards to the budget prepared for me. Also in terms of security,I have a lot of experience with kali linux hacking(.i.e Your websites and user data is safe from the malicious hacker)
                              
                            </p>
                        </div>
                    </div>
        </div>
    </section>
    <div className="footer">

    </div>
    </div>
  );
}



export default App;
