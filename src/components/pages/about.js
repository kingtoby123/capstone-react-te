import React from "react";
import profilePicture from "../../../static/assets/images/bio/myShot.jpg";

export default function() {
  return (
    <div>

      <div className="content-page-wrapper">
        <div className="image">
          <img src={profilePicture} alt="myShot" />
        </div>

        <div className="heading">
          <h3>About Myself</h3>
        </div>
      
        <div className="right-column">
          <p>
            Hello friends! in this part of the website I am going to go in depth into me as a person and my experinces in basketball from training to teaching. For me there is nothing better than seeing progress on the basktball court it is so important to be constantly imporving your game, however one of the greatest challenges is finding information on not only how to improve but to do it with maximum efficency. My passion for guiding kids is the main reason I decided to build this webiste, so I can give free and fast adice and drills to help you elevate your game. I have been playing basketball for a number of years now and I also have experince in coaching and being a camp counselor at  basketball summer camps. I have many hours in the gym training with my childhood friend who use to play at a community college and has also been with me in these training camps and coaching in the summer months. with our help we will make you be the absolute best player you can become.  
          </p>
        </div>
      </div>

  </div>

  );
}
