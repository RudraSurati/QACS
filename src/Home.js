import './Home.css';
import Navbar from './components/navbar';
import video from './images/Video.mkv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPen } from '@fortawesome/free-solid-svg-icons';
import Logo from './images/Logo.png'
import ill from './images/Image 2.jpg'
import $ from 'jquery'
import Message from './components/message';
import ProgramCards from './components/programCards';

const tabTransform = (num) => {
    if(num === 1) {
        $(".RTB").removeClass("rActive")
        $(".RTB1").addClass("rActive")
    } else if(num === 2) {
        $(".RTB").removeClass("rActive")
        $(".RTB2").addClass("rActive")
    } else if(num === 3) {
        $(".RTB").removeClass("rActive")
        $(".RTB3").addClass("rActive")
    } else {
        $(".RTB").removeClass("rActive")
        $(".RTB4").addClass("rActive")
    }
}

const Home = () => {
    return(
        <>
            <Navbar />
            <div className="body">
                <div className='text'>
                    <h1 className='headText'>
                        <span>Queen Of Angels'</span> <br />
                        Convent Higher <br />
                        Secondary School
                    </h1>
                    <p className='bodyPara'>Revolutionize learning with splendid education</p>

                    <p className='addition'>Apply to this school.</p>
                    <button className='apply'>Apply Now! <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <video src={video} className='video' controls></video>
            </div>

            <div className='gallery'>
                <div className="info">
                    <img src={Logo} alt='Logo' className='galleryLogo'/>
                    <h1 className='galHT'>Elevating Education <br /> Enriching Life</h1>
                    <p className='galPara'>
                        Efficiently adapting to the demands of modern life, we <br />
                        provide innovative learning for both acadamic success <br />
                        and real-world skills.
                    </p>
                </div>
                <div className='galOverLay'></div>
            </div>
            <div className='programs'>
                <p className='pSubHead'>OUR PROGRAM</p>
                <h1 className='pHead'>Program</h1>
                <p className="subTitle">Pathways to a brighter future</p>
                <div className="pCards">
                    <ProgramCards image="https://c.stocksy.com/a/MbO300/z9/809556.jpg" heading="Primary School" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <ProgramCards image="https://c.stocksy.com/a/MbO300/z9/809556.jpg" heading="Primary School" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <ProgramCards image="https://c.stocksy.com/a/MbO300/z9/809556.jpg" heading="Primary School" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <ProgramCards image="https://c.stocksy.com/a/MbO300/z9/809556.jpg" heading="Primary School" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                </div>
            </div>
            <div className='reviews'>
                <p className='rt'>TESTIMO<span style={{color: "#000"}}>NIAL</span></p>
                <h1 className='rH'>Voices of Success</h1>
                <p className='rSubText'>What Our Students, Parents, and Mentors Say</p>
                <div className='rNav'>
                    <div className='tabs'>
                        <button className="RTB RTB1 rActive" onClick={() => tabTransform(1)}>All Tesimonials</button>
                        <button className="RTB RTB2" onClick={() => tabTransform(2)}>Alumni</button>
                        <button className="RTB RTB3" onClick={() => tabTransform(3)}>Mentor</button>
                        <button className="RTB RTB4" onClick={() => tabTransform(4)}>Parent</button>
                    </div>
                    <button className='WRO'><FontAwesomeIcon icon={faPen} /> Write Your Own</button>
                </div>
                <div className='rRow1'>
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </div>
                <div className='rRow2'>
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </div>
                <button className='WRO2'><FontAwesomeIcon icon={faPen} /> Write Your Own</button>
            </div>
            <div className="getToKnow">
                <div className='illustration'>
                    <img src={Logo} alt='Logo' className='gtkLogo'/>
                    <img src={ill} alt='illustration' className='illI' />
                </div>
                <div className='getToKnowText'>
                    <p className="gtktHead">ABOUT US</p>
                    <h1 className='gtktGet'>Get to know Queens of Angels'</h1>
                    <p className='gtktInfo'>
                        Welcome to the Portals of Queen of Angels’ Convent Secondary and Hr. Secondary School, the only Educational Institution in Bharuch affiliated to ICSE Board, New Delhi. The academy is situated at Vadadla Village on NH-8. The School Infrastructure has been meticulously planned and designed to cater the desired educational objectives with key focus on child development and better physical learning ambience which includes new technologies and emerging pedagogical practices.
                        <br />
                        <br />
                        Built up on a 4 acre land, the well-maintained school building is of two-storey, sectioned into two blocks (Primary and Secondary) having four different gateways, each leading to the main gate of the school.  Emphasis has been put upon making provisions for perfect amenities and facilities within school environment, prioritizing the needs and requirements of the students. These include big ventilated classrooms, CCTV Surveillance, playgrounds, basketball courts, skating rink, football ground, abundant greenery, stage, sports complex, garden, pure drinking water, generator, fenced boundary walls and so on.
                        <br />
                        <br />
                        We believe that availability of infrastructural facilities holds a prime significance and is truly regarded as the base for good-quality education.
                    </p>
                    <div className='gtktBox'>
                        <div className='gtktbT'>
                            <h1 className='gtktbtN'>474</h1>
                            <h1 className='gtktbtH'>Classrooms</h1>
                        </div>
                        <div className='seperator'></div>
                        <div className='gtktbT'>
                            <h1 className='gtktbtN'>474</h1>
                            <h1 className='gtktbtH'>Students</h1>
                        </div>
                        <div className='seperator'></div>
                        <div className='gtktbT'>
                            <h1 className='gtktbtN'>474</h1>
                            <h1 className='gtktbtH'>Teachers</h1>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="f2">
                    <div className='naF'>
                        <h1 className='FH'>Home</h1>
                        <button className="FNB">Congregation History</button>
                        <button className="FNB">School's History</button>
                    </div>
                    <div className='naF'>
                        <h1 className='FH'>About Us</h1>
                        <button className='FNB'>Vision & Mission</button>
                        <button className='FNB'>School Motto</button>
                        <button className='FNB'>School Theme</button>
                        <button className='FNB'>House System</button>
                        <button className='FNB'>Student Council</button>
                    </div>
                    <div className='naF'>
                        <h1 className='FH'>Benevolent Board</h1>
                        <button className="FNB">Manager's Missive</button>
                        <button className="FNB">Principal's Desk</button>
                    </div>
                    <div className='naF'>
                        <h1 className='FH'>Academics</h1>
                        <button className="FNB">School Working Hours</button>
                        <button className="FNB">Board Result</button>
                        <button className="FNB">General Proficiency</button>
                        <button className="FNB">Method of Testing & promotion</button>
                        <button className="FNB">Academic Syllabus</button>
                    </div>
                </div>
                <div className='f1'>
                    <div className='naF'>
                        <h1 className='FH'>Activities</h1>
                        <button className="FNB">Activities & Compitetion</button>
                        <button className="FNB">Events & Celebration</button>
                    </div>
                    <div className='naF'>
                        <h1 className='FH'>Other Links</h1>
                        <button className="FNB">Facilities</button>
                        <button className="FNB">Awards & Achievements</button>
                        <button className="FNB">Calendar</button>
                        <button className="FNB">News & Updates</button>
                        <button className="FNB">Admission & Fee</button>
                        <button className="FNB">Angelites' Alumni</button>
                        <button className="FNB">Contact Us</button>
                    </div>
                    <div className='naF'>
                        <h1 className='FH'>Magazine</h1>
                        <button className="FNB">Teacher's Art & Craft</button>
                        <button className="FNB">Tachers's Creative Writing</button>
                        <button className="FNB">Students's Art & Craft</button>
                        <button className="FNB">Tachers's Creative Writing</button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home;