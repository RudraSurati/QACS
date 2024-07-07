import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/error';
import HomeHistory from './pages/home/home';
import mv from './images/Mother Veronica.jpeg'
import old from './images/old.png';
import mi from './images/Manager.jpeg'
import pd from './images/principal.jpg'
import Vm from './pages/au/vm';
import Sm from './pages/au/sm';
import Theme from './pages/au/theme';
import Hs from './pages/au/hs';
import Address from './pages/others/address';
import Af from './pages/others/af';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/address" element={<Address />}/>
          <Route path="/admissionfee" element={<Af />}/>
          <Route path="/visionandmission" element={<Vm />}/>
          <Route path="/motto" element={<Sm />}/>
          <Route path="/theme" element={<Theme />}/>
          <Route path="/housesystem" element={<Hs />}/>
          <Route path="*" element={<Error />}/>
          <Route path="/managermissive" element={<HomeHistory head="Manager's Missive" image={mi}
          first={<><span class="big">I</span>t’s a great delight to welcome you to visit our school’s website.    All the information pertaining to the school and its activities is made available for you to know the school better through this website.
            <br /><br />
            It is indeed a pleasure to mention the hard work of our staff, as they put their efforts in fostering and help the students succeed, develop skills and build a character based on love, service and sacrifice, which is also in connection to the theme for the year 2023 -2024 “Education breeds confidence, Confidence breed hope, Hope breeds peace.”
            <br /><br />
            Significant attention on co-curricular activities ensuring that our students are provided with opportunities to explore their interests and talents beyond the confines of the classroom.</> }
            second={<>Dear students, you are the heartbeat of this institution. Carry the values and teachings you imbibed here into the world, and let your light shine bright.
              <br /><br />
              Dear parents I express my gratitude for your unwavering support and confidence.  Your faith in our institution has been the driving force behind our success. 
              <br /><br />
              The school is always welcome for your constructive suggestions and believe in working together as a team for the betterment of the students and the Institution.
              <br /><br />
              Thank you,
              <br /><br />
              Sr. Jenny Augustine
              <br /><br />
              Manager</>} />}
            />
          <Route path="/principaldesk" element={<HomeHistory head="Principal's Desk" image={pd} 
          first={<><span class="big">D</span>ear Students, Staff, Parents & all Well Wishers of Queen of Angels' Convent Hr. Sec. School,
            <br /><br />
            Step into the Portals of Queen of Angels’ Convent Secondary and Higher Secondary School, the sole educational institution in Bharuch affiliated with the ICSE Board, New Delhi. Nestled in Vadadla Village on NH-8, our academy boasts meticulously planned infrastructure designed to fulfill educational objectives with a primary focus on child development and an optimal physical learning environment. This commitment extends to incorporating new technologies and emerging pedagogical practices.
            <br /><br />
            Spanning 4 acres, our well-maintained school building comprises two stories, divided into Primary and Secondary blocks, each accessible through four distinct gateways leading to the main entrance.</>}
            second={<>We've prioritized the creation of an ideal learning atmosphere, equipping the school with essential amenities and facilities tailored to students' needs. These include spacious and ventilated classrooms, CCTV surveillance, playgrounds, basketball courts, a skating rink, a football ground, lush greenery, a stage, sports complex, garden, pure drinking water, generator backup, and secure fenced boundary walls.
              <br /><br />
              Recognizing the pivotal role of infrastructural facilities, we affirm their significance as the foundation for delivering high-quality education. Welcome to an environment where learning flourishes amid thoughtful planning and dedication to student well-being.
              <br /><br />
              God bless you all,
              <br /><br />
              Best wishes,<br /><br />
              Sr. Sheela<br /><br />
              Principal</>}/>}/>
          <Route path='/congregation' element={<HomeHistory head="Congregation of the Carmelite Religious" 
          first={<><span class="big">W</span>e, the Congregation of Carmelite Religious, are women consecrated to God, with Our Lady of Mt. Carmel as our Patroness. We are committed to the cause of education, in response to the charismatic inspiration of our foundress Mother Mary Theresa Veronica of the Passion.
                <br /><br />
                Mother Veronica (nee Sophie Leeves) was born of Anglican parents on 1st October 1823. The  atmosphere  of  love  for  God  in  her  home culminated in her outstanding love for God which was expressed in her tendency to serve the helpless, the afflicted and the sick. She was well-educated and highly accomplished in the fields of music and art, with mastery over Greek, French, German, her native English etc. & also Malayalam. This visionary woman dedicated herself to educate others less fortunate than herself.
                <br /><br />
                She was a woman of strong faith and prayer. Her intense desire for the Real Presence led her to embrace the Catholic faith and move onwards into Religious life, first, as Sister of St. Joseph of the Apparition and later as a Carmelite.</>}
                second={<>It was on 16th July, 1868 that she founded the Apostolic Carmel – a Carmel for the Missions at Bayonne, France. It was here, in real poverty that she began moulding young girls into a Religious Order to work in India. She sought God‘s will in everything and exhorted them to be obedient and humble. She passed into glory on 16th November, 1906.
                  <br /><br />
                  The first batch of Sisters arrived in Mangalore in 1870. It was from here that the Carmelites gradually spread to the Malabar Coast where there was need for Catholic education. By 1880 the Congregation took root at Holy Angels‘ Convent, Thiruvananthapuram, from where it has spread its branches in India and abroad. Following in the footsteps of our Lord Jesus Christ and our foundress Mother Veronica, we impart fullness of life through our Apostolate of education and social work. We reach out to all God s children especially girls, women and the marginalized. We strive to produce intellectually, competent, morally upright, socially committed and spiritually inspired persons who are responsible and available for the greater service of the country and of the world.</>}
                  image={mv}/>}/>
          <Route path='/history' element={<HomeHistory head="The School History" 
          first={<><span class="big">T</span>his educational institution was established in 1985 and is managed by the Congregation of the Carmelite Religious (C.C.R). The humble beginning to a legacy of being a School of repute Queen of Angels' Convent has come a long way to become a positive catalyst of change.
          <br /><br />
          In 1979, on the invitation of Rt. Rev. Ignatius D'souza - the Bishop of Baroda, the Carmelite Sisters - Sr. Mary Thelma and Sr. Hyacintha, entered into a contract with Gujarat Narmada Fertilisers & Chemicals Limited (GNFC), a Public Sector Enterprise, to establish a school in Bharuch. They started their mission work in full swing, enthusiasm and dedication with Carmelite spirit. The Sisters nursed and nurtured the
          Institution from KG to Std. XII. After Sr.Hyacintha's transfer, Sr. Hope took over as the Principal of GNFC School, when the collaboration with GNFC came to an end. The need, in Bharuch city, for an excellent affordable education coupled with the zeal and mission to the society, arose in the heart of Sr. Hope. Queen of Angels' Convent Higher Secondary School (QACS) is the brain child of Sr. Hope born out of her vision.</>}
                second={<>In 1985, at first, Sr. Hope with her team of Carmelite Sisters started QACS with KG and Class I, in two different locations, namely, Pritam Society and Rachna Nagar under the able guidance of Sr. Gemma and Sr. Digna respectively with a strength of 30 children and 5 staff. Later, due to some constraints, the entire school was shifted to Swami Vivekananda Society, Maktampur, Bharuch. Gradually, help trickled in from all quarters.
                  <br /><br />
                  In 1990, QACS was shifted to Vadadla village in a small building (3 rooms and an office) of its own on the barren and thorny land for Classes I to V, the KG section still kept at Maktampur till 1991 due to lack of infrastructure at Vadadla.
                  The transition was not smooth and without stress. At present, QACS has 3000 students with an ebullient Management and qualified and experienced staff in a two storeyed colossal structure.
                  QACS is a co-education affiliated to the Council of Indian School Certificate Examination (ICSE and ISC).
                  The school stands for academic excellence, development of skills and character formation based on the love of God and service to mankind, with a view to train citizens and country. It aims to integrate traditional values with the needs of modern competitive society.</>}
                  image={old}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
