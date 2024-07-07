import React from 'react'
import Navbar from '../../components/navbar'
import './af.css'
import $ from 'jquery'

const changeText = (button) => {
    if(button === "add") {
        $(".afTab").removeClass("afTActive")
        $(".add").addClass("afTActive")
    } else if(button === "with") {
        $(".afTab").removeClass("afTActive")
        $(".with").addClass("afTActive")
    } else if(button === "fees") {
        $(".afTab").removeClass("afTActive")
        $(".fees").addClass("afTActive")
    } else {
        $(".afTab").removeClass("afTActive")
        $(".sa").addClass("afTActive")
    }
}

function Af() {
  return (
    <>
        <Navbar />
        <div className='afTabs'>
            <button className='afTab afTActive add' onClick={() => changeText("add")}>Admission</button>
            <button className='afTab with' onClick={() => changeText("with")}>Withdrawals</button>
            <button className='afTab fees' onClick={() => changeText("fees")}>Fees</button>
            <button className='afTab sa' onClick={() => changeText("sa")}>Special Awards</button>
        </div>

        <div className='addmissionTab'>
            <p>
            Admissions are open to all the children irrespective of their religion or caste.

            The child seeking admission in Nursery should complete 3 Years on 31st May and vice versa for other classes.


            Application forms for Nursery will be made open on the school website on the dates and time assigned by the School Management (preferably November end or December first week).


            Admissions for other classes are given on merit basis based on the criteria decided by the school. The decision of the admission committee shall be final. Admissions are done as per the number of vacancies available with us.

            <br />
            <br />
            No correspondence through email or telephonic conversation will be entertained regarding admissions.

            Any Attempt to bring influential contacts for the admission of your ward will disqualify the candidate.

            Documents to be submitted at the time of admission.

            <div className='adBs'>
                <button className='atB'>Std Nursery - I</button>
                <button className='atB'>Std II - VIII</button>
            </div>
            </p>
        </div>
    </>
  )
}

export default Af