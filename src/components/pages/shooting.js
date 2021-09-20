import React, { Component } from 'react'


export default class Shooting extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="shooting-wrapper">

                <div className="information-shooting-wrapper">
                    <h3>Shooting!</h3>
                    <p>here in this section I am going to go over the main concepts of shooting and some important tips and videos on how to improve your jump shot today! Along with ways to improve your conditioning and also your offensive game.</p>

                </div>



                <div className="shooting-warmup-wrapper">

                    <div className="shooting-warmup-heading">
                        <h3>How To Structure Your Workouts</h3>
                        
                    </div>

                    <div className="shooting-warmup-tips">
                        <p>First things first you need to have a good understanding that to get better you need to make each one of your workouts productive and you need to take every rep at game time speed. This will ensure you are not making false progress to your game.</p>
                        <ul>dynamic stretching</ul>
                        <ul>form practice ( start shooting close to the basket then start expanding your range really keep in mind on the basics)</ul>
                        <ul>plan out what you want to work out before showing up to the gym</ul>
                        <ul>having a partner to do the workout with you</ul>

                    </div>

                </div>

                <div className="shooting-tips-wrapper">

                    <div className="shooting-tip-heading">
                        <h3>Tips on shooting</h3>
                    </div>

                    <div className="shooting-tips">
                        <p>here I am going to give my top tips to making you a better shooter; keep these in mind as you watch the videos and really pay attention to the details becuase if you master the basics then your game will grow much faster.</p>
                        <ul>form is important! </ul>
                        <ul>keep eyes on basket before you go up for your shot</ul>
                        <ul>always have a good warm up before you start playing</ul>
                    </div>
                </div>

                <div className="shooting-drill-content">

                    <div className="shooting-drill-content-heading">
                        <h3>Drill Time</h3>
                    </div>

                    <div className="form-shooting-content">

                        <div className="form-shooting-content-heading">
                            <h3>Form Shooting</h3>
                        </div>

                        <div className="form-shooting">
                            <a href="https://www.youtube.com/watch?v=t7ciq_x4138">Get Your Form Right!</a>

                        </div>

                    </div>

                    <div className="offensive-shooting-content">

                        <div className="offensive-shooting-content-heading">
                            <h3>Shooting Drills</h3>
                        </div>

                        <div className="offensive-shooting">
                            <h3>some videos</h3>
                        </div>

                    </div>

                    
                </div>

                





                       
                
            </div>
        )
    }
}