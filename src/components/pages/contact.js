import React from 'react'
import emailjs from "emailjs-com"

export default function contact (props) {


  function sendEmail(e) {
     e.preventDefault();

    emailjs.sendForm('service_4cx74uu', 'template_hrb5jsi', e.target, 'user_6MfeK5RxUPXBPqV9Mvq2V')
      .then((result) => {
          console.log(result.text); window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

    return (
        <div className="contact-wrapper">

            <div className="area-below-header">

                <div className="text-area">

                    <div className="contact-heading">
                        <h3>CONTACT</h3>

                    </div>

                    <div className="paragraph-text">

                        <p>Here at MyHoops we want everyone to feel invited to come and explore and also interact with us! here you can find our inforamtion on how to contact us! if you want to book a private session or just have a simple queston we are here for you so please just send us an email with your contact information</p>
                    </div>

                </div>

            </div>

            <div className="contact-area-wrapper">

                <div className="contact-area-heading">
                  <h3>Contact Us</h3>

                </div>


                <form className="form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" name="name" id="FullName" placeholder="Your name"/>
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Your email"/>
                    </div>

                    <div className="form-group">
                        <textarea name="message" name="message" id="message" placeholder="Message"></textarea>
                    </div>


                    <div className="centered-btn-wrapper">
                        <button type="submit" className="btn" value="Send">Send</button>
                    </div>
                </form>

                <div className="text-contact-area">


                  <div className="my-information">
                      <div className="phone">
                          <h3>Telephone Number</h3>
                          971-209-9057

                      </div>

                      <div className="email">
                          <h3>Email</h3>
                          tobyenglishD1@gmail.com
                      </div>
                  </div>

                </div>
            </div>
        </div>
    )
}