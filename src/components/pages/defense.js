import React, { Component } from 'react'


export default class defense extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="defense-wrapper">

                <div className="information-defense-wrapper">
                    <h3>defense!</h3>
                    <p>here in this section I am going to go over the main concepts of defense and some important tips and videos on how to improve your jump shot today! Along with ways to improve your conditioning and also your offensive game.</p>

                </div>



                <div className="defense-warmup-wrapper">

                    <div className="defense-warmup-heading">
                        <h3>How To Structure Your Workouts</h3>
                        
                    </div>

                    <div className="defense-warmup-tips">
                        <p>First things first you need to have a good understanding that to get better you need to make each one of your workouts productive and you need to take every rep at game time speed. This will ensure you are not making false progress to your game.</p>
                        <p>here are some good ways for you to start your workouts</p>
                        <ul>dynamic stretching</ul>
                        <ul>form practice ( start defense close to the basket then start expanding your range really keep in mind on the basics)</ul>
                        <ul>plan out what you want to work out before showing up to the gym</ul>
                        <ul>having a partner to do the workout with you</ul>

                    </div>

                </div>

                <div className="defense-tips-wrapper">

                    <div className="defense-tip-heading">
                        <h3>Tips on defense</h3>
                    </div>

                    <div className="defense-tips">
                        <p>here I am going to give my top tips to making you a better shooter; keep these in mind as you watch the videos and really pay attention to the details becuase if you master the basics then your game will grow much faster.</p>
                        <ul>form is important! </ul>
                        <ul>keep eyes on basket before you go up for your shot</ul>
                        <ul>always have a good warm up before you start playing</ul>
                    </div>
                </div>

                <div className="defense-drill-content">

                    <div className="defense-drill-content-heading">
                        <h3>Drill Time</h3>
                    </div>

                    <div className="form-defense-content">

                        <div className="form-defense-content-heading">
                            <h3>Form defense</h3>
                        </div>

                        <div className="form-defense">
                            <a href="https://www.youtube.com/watch?v=QaYwcS00vSA">Defense Form</a>
                        </div>

                    </div>

                    <div className="offensive-defense-content">

                        <div className="offensive-defense-content-heading">
                            <h3>defense Drills</h3>
                        </div>

                        <div className="offensive-defense">
                            {/* defense videos will go here */}
                        </div>

                    </div>

                    
                </div>

                





                       
                
            </div>
        )
    }
}