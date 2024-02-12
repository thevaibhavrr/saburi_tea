import React from "react";
import "../../style/contact-us/have-a-question-contact-us-header.css";
import Mylocation from "./mylocation";

function Haveaquestion() {
  return (
    <>
      <div className="main-have-a-question-contact-us">
        <Mylocation />
        {/* have a question */}
        <div>
          {/* form */}
          <div className="have_a_question_main_form_before_start">
            <div className="text-start ">
              <h1 className="have_a_question_text">Have a question?</h1>
            </div>
            {/* form */}
            <div className="have_a_question_main_form">
              <div className="have_a_question_main_form_input_div">
                <input type="text" name="Full_Name" placeholder="Full Name" />
              </div>
              <div className="have_a_question_main_form_input_div">
                <input type="text" name="email" placeholder="Email Address" />
              </div>
              <div className="have_a_question_main_form_input_div">
                <input type="text" name="phone" placeholder="Phone Number" />
              </div>
              <div className="have_a_question_main_form_input_div">
                <textarea type="text" name="message" placeholder="Message" />
              </div>
              {/* button */}
              <div className="have_a_question_save_button_div ">
                <button className="have_a_question_save_button ">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Haveaquestion;
