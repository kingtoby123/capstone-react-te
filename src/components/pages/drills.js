import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import CummingShootingForm from "../../../static/assets/images/logos/cummings-shooting-drill.jpg"
import BallHandling from "../../../static/assets/images/logos/ball-handling.jpg"
import Defense from "../../../static/assets/images/logos/defense.jpg"






export default class Drills extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="blog-wrapper">

                <div className="heading-blog-wrapper">
                    <h3>Drills!</h3>
                    <p>Get the drills from me that I think would be great for all levels</p>
                </div>

                <div className="information-section">
                    <div className="text-section">
                        <p>Below you are going to find two types of Drills; partner and individaul it will also include tips on what you should be doing before and after a work out. Below you will also find drills that I think are important at your level weather that be elementry, highschool, or college however feel free to try any one you want and remember to have fun! training should be interactive and exiting  that's  how you will get the most out of your workouts! </p>
                    </div>
                </div>

                <div className="tips-section">
                    <h3>What You Should Be Doing Before A WorkOut</h3>
                    <p>One of my biggest tips that I want to give you on what you should be doing before a workout and that is stretching! you see a lot of pro athletes stretch not only to prevent injuries but also to maximize thier work outs.</p>
                    <p>there are two types of stretching: dynamic and static. for begginers just try static stretching first and as you see the improvement try and transfer to dynamic stretching and you will see a huge improvment in your game. Here are a few stretching exercises  </p>

                    <div className="stretching-section">

                        <div className="static">

                            <h3>Static</h3>
                            <ul>Hamstring stretch </ul>
                            <ul> Quadriceps Stretch</ul>
                            <ul> Groin Stretch</ul>
                            <ul> calf Stretch</ul>
                        </div>

                        <div className="dynamic">
                            <h3>dynamic</h3>
                            <ul>light jog</ul>
                            <ul>shuffle</ul>
                            <ul>shuffle</ul>


                        </div>

                    </div>
                </div>

                <div className="drills-wrapper">

                    <div className="drill-information">
                        <h3>Drills!</h3>
                        <p>here are some of the catigories that I want to highlight, click on the link below to get accsess some great tips and drills.</p>
                    </div>

                    <div className="tip-category">


                        <div className="shooting">

                            <img src={CummingShootingForm} alt="CummingsShootingForm" />
                            <NavLink to="/shooting" activeClassName="nav-link-active">
                                Shooting
                            </NavLink>
                            
                            

                        </div>

                        <div className="ball-handling">

                            <img src={BallHandling} alt="Ball-Handling" />

                            <NavLink to="/handling" activeClassName="nav-link-active">
                                Ball Handling
                            </NavLink>
                            


                        </div>

                        <div className="defense">

                            <img src={Defense} alt="Defense" />


                            <NavLink to="/defense" activeClassName="nav-link-active">
                                Defense
                            </NavLink>
                        
                    </div>



                    </div>

                    


                </div>
                
            </div>
        )
    }
}