import React, { Component } from 'react'


export default class BallHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="ball-handling-wrapper">

                <div className="information-ball-handling-wrapper">
                    <h3>ball-handling!</h3>
                    <p>here in this section I am going to go over the main concepts of ball-handling and some important tips and videos on how to improve your jump shot today! Along with ways to improve your conditioning and also your offensive game.</p>

                </div>



                <div className="ball-handling-warmup-wrapper">

                    <div className="ball-handling-warmup-heading">
                        <h3>How To Structure Your Workouts</h3>
                        
                    </div>

                    <div className="ball-handling-warmup-tips">
                        <p>First things first you need to have a good understanding that to get better you need to make each one of your workouts productive and you need to take every rep at game time speed. This will ensure you are not making false progress to your game.</p>
                        <p>here are some good ways for you to start your workouts</p>
                        <ul>dynamic stretching</ul>
                        <ul>form practice ( start ball-handling close to the basket then start expanding your range really keep in mind on the basics)</ul>
                        <ul>plan out what you want to work out before showing up to the gym</ul>
                        <ul>having a partner to do the workout with you</ul>

                    </div>

                </div>

                <div className="ball-handling-tips-wrapper">

                    <div className="ball-handling-tip-heading">
                        <h3>Tips on ball-handling</h3>
                    </div>

                    <div className="ball-handling-tips">
                        <p>here I am going to give my top tips to making you a better shooter; keep these in mind as you watch the videos and really pay attention to the details becuase if you master the basics then your game will grow much faster.</p>
                        <ul>form is important! </ul>
                        <ul>keep eyes on basket before you go up for your shot</ul>
                        <ul>always have a good warm up before you start playing</ul>
                    </div>
                </div>

                <div className="ball-handling-drill-content">

                    <div className="ball-handling-drill-content-heading">
                        <h3>Drill Time</h3>
                    </div>

                    <div className="form-ball-handling-content">

                        <div className="form-ball-handling-content-heading">
                            <h3>Form ball-handling</h3>
                        </div>

                        <div className="form-ball-handling">
                            <a href="https://www.youtube.com/watch?v=BnvGa0I8bMc">Learn How To Dribble</a>
                        </div>

                    </div>

                    <div className="offensive-ball-handling-content">

                        <div className="offensive-ball-handling-content-heading">
                            <h3>ball-handling Drills</h3>
                        </div>

                        <div className="offensive-ball-handling">
                            {/* ball-handling videos will go here */}
                        </div>

                    </div>

                    
                </div>

                





                       
                
            </div>
        )
    }
}