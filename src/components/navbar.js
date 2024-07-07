import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../images/Logo.png';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

const nav = () => {
    if($(".links").hasClass("active")) {
        $('.links').animate({position: "absolute", top: "-100vh"})
        $(".links").removeClass("active")
    } else {
        $('.links').animate({position: "absolute", top: "10vh"})
        $(".links").addClass("active")
    }
}

const close = () => {
    $(".home").addClass("d-none");
    $(".au").addClass("d-none");
    $(".bb").addClass("d-none");
    $(".aca").addClass("d-none");
    $(".act").addClass("d-none");
    $(".mag").addClass("d-none");
    $(".other").addClass("d-none");
    $(".navTools").animate({left: "-200%"})
    if($(".links").hasClass("active")) {
        $('.links').animate({position: "absolute", top: "-100vh"})
        $(".links").removeClass("active")
    } else {
        $('.links').animate({position: "absolute", top: "10vh"})
        $(".links").addClass("active")
    }
}

const open = (button) => {
    if(button === "home") {
        $(".navTools").animate({left: "0%"})
        $(".home").removeClass("d-none");
    } else if(button === "about") {
        $(".navTools").animate({left: "0%"})
        $(".au").removeClass("d-none");
    } else if(button === "bb") {
        $(".navTools").animate({left: "0%"})
        $(".bb").removeClass("d-none");
    } else if(button === "aca") {
        $(".navTools").animate({left: "0%"})
        $(".aca").removeClass("d-none");
    } else if(button === "acti") {
        $(".navTools").animate({left: "0%"})
        $(".act").removeClass("d-none");
    } else if(button === "mag") {
        $(".navTools").animate({left: "0%"})
        $(".mag").removeClass("d-none");
    } else {
        $(".navTools").animate({left: "0%"})
        $(".other").removeClass("d-none");
    }
}

const Navbar = () => {
    const navigate = useNavigate()
    return(
        <>
            <div className='linkBar'>
                <div className='sms'>
                    <h1 className="phone"><FontAwesomeIcon icon={faPhone}/> +91 02642 – 230 837</h1>
                    <h1 className='email'><FontAwesomeIcon icon={faEnvelope}/> 	queenofangelsconventschool@gmail.com</h1>
                </div>
                <div className='socialMedia'>
                    <a className="youtube" href="https://youtube.com"><FontAwesomeIcon icon={faYoutube}/></a>
                    <a className='facebook' href="https://youtube.com"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="x" href="https://youtube.com"><FontAwesomeIcon icon={faXTwitter}/></a>
                </div>
            </div>
            <div className='navbar'>
                <img src={Logo} alt="Logo" className="logo" onClick={() => navigate("/")}/>
                <div className='links'>
                    <button className="navbtn" onClick={() => open("home")}>Home</button>
                    <button className="navbtn" onClick={() => open("about")}>About Us</button>
                    <button className="navbtn" onClick={() => open("bb")}>Benevolent Board</button>
                    <button className="navbtn" onClick={() => open("aca")}>Academics</button>
                    <button className="navbtn" onClick={() => open("acti")}>Activities</button>
                    <button className="navbtn" onClick={() => open("mag")}>Magazine</button>
                    <button className="navbtn" onClick={() => open("oth")}>Other</button>
                </div>
                <div className='right'>
                    <button className='admission'>Admission</button>
                    <button className='menu' onClick={() => nav()}><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </div>

            <div className="navTools">
                <button className='close' onClick={() => close()}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="home d-none">
                    <button className="ntbtn" onClick={() => {navigate("/congregation"); close()}}>Congregation History</button>
                    <button className="ntbtn" onClick={() => {navigate("/history"); close()}}>School's History</button>
                </div>
                <div className="au d-none">
                    <button className="ntbtn" onClick={() => {navigate("/visionandmission"); close()}}>Vision & Mission</button>
                    <button className="ntbtn" onClick={() => {navigate("/motto"); close()}}>School Motto</button>
                    <button className="ntbtn" onClick={() => {navigate("/theme"); close()}}>School Theme</button>
                    <button className="ntbtn" onClick={() => {navigate("/housesystem"); close()}}>House System</button>
                    <button className="ntbtn">Student Council</button>
                </div>
                <div className="bb d-none">
                <button className="ntbtn" onClick={() => {navigate("/managermissive"); close()}}>Manager's Missive</button>
                    <button className="ntbtn" onClick={() => {navigate("/principaldesk"); close()}}>Principal's Desk</button>
                </div>
                <div className="aca d-none">
                    <button className="ntbtn">School Working Hours</button>
                    <button className="ntbtn">Board Result</button>
                    <button className="ntbtn">General Proficiency</button>
                    <button className="ntbtn">Method of Testing & promotion</button>
                    <button className="ntbtn" onClick={() => {navigate("/syllabus"); close()}}>Academic Syllabus</button>
                </div>
                <div className="act d-none">
                    <button className="ntbtn">Activities & Competetion</button>
                    <button className="ntbtn">Events & Celebration</button>
                </div>
                <div className="mag d-none">
                    <button className="ntbtn">Teacher's Art & Craft</button>
                    <button className="ntbtn">Tachers's Creative Writing</button>
                    <button className="ntbtn">Students's Art & Craft</button>
                    <button className="ntbtn">Tachers's Creative Writing</button>
                </div>
                <div className="other d-none">
                    <button className="ntbtn">Facilities</button>
                    <button className="ntbtn">Awards & Achievements</button>
                    <button className="ntbtn">Calendar</button>
                    <button className="ntbtn">News & Updates</button>
                    <button className="ntbtn"onClick={() => {navigate("/admissionfee"); close()}}>Admission & Fee</button>
                    <button className="ntbtn">Angelites' Alumni</button>
                    <button className="ntbtn" onClick={() => {navigate("/address"); close()}}>Address</button>
                    <a className="ntbtn" href="https://icici.myclassboard.com/" target="_qacs">Online Fee Payment</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;