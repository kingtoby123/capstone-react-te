import React, { Component } from 'react'
import Offense from "../../../static/assets/images/logos/offense.jpg"
import OnBallDefense from "../../../static/assets/images/logos/on-ball-defense.jpg"

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        const path = '/login';
        this.props.history.push(path);
      }

  

   

    render() {
        
        return (
            <div className="home-wrapper">


                <div className="home-heading-wrapper">

                    <div className="heading">

                        <div className="home-title">
                            <h3>Welcome to  KingHoops!</h3>
                        </div>

                        <div className="home-heading-text">
                            <p>I made this website for the sole purpose for anyone at any stage of their basketball journey to come and learn more about basketball! this is a free website where you can find helpful tips and drills to help you elevate your game. What are you waiting for? lets get started today by getting into some material click the button below to jump into it. </p>
                        </div>

                        <button  onClick={this.routeChange} className="btn" type="submit">
                            Click Here!
                        </button>
                    </div>

                </div>

                <div className="home-motivation-wrapper">

                    <div className="heading-motivation">
                        <h3>Time to elevate your game to the next level</h3>
                    </div>

                    <div className="home-motivation-text">

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vero quibusdam illum minima ab voluptatibus, nobis sit, in dolor eum voluptas aut, perferendis nisi esse?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam amet magni veritatis qui fuga ab placeat optio expedita rem necessitatibus repudiandae, eius nemo iusto aperiam inventore, eos quos numquam velit. Recusandae quas itaque harum cumque quidem nisi est magnam sapiente tenetur dignissimos neque quia voluptate atque, similique natus voluptates incidunt enim at iure non consequuntur hic fugiat consequatur ut! Magni!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eum accusantium harum totam, dolor ratione voluptatibus error vel blanditiis soluta maiores numquam. Incidunt, numquam nostrum.</p>

                    </div>

                    
                </div>

                <div className="home-information">

                    <div className="heading-information">

                        <h3>What We Do Here</h3>


                        <div className="home-information-text">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus quaerat esse quidem maxime aliquam perspiciatis. Quam tempore ab aliquam perspiciatis autem perferendis amet, reprehenderit accusamus laudantium illo totam incidunt facere saepe, at, nesciunt magni quos earum. Praesentium, rem voluptatibus esse, aliquid quam reprehenderit dolores odit laborum pariatur vitae delectus!</p>
                        </div>
                    </div>

                    <div className="home-mini-box-wrapper">

                        <div className="left-box">

                            <div className="left-box-image">
                                <img src={OnBallDefense} alt="OnBallDefense" />
                            </div>

                            <div className="left-box-heading">
                                <h3>Defense</h3>
                            </div>

                            <div className="left-box-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora quod blanditiis quas, neque, aliquam ratione odio, aut architecto nisi assumenda maiores. Alias officia ducimus maxime! Dolore ducimus similique quisquam, necessitatibus dignissimos nostrum a nisi itaque ea tenetur tempore illum laudantium doloribus neque iure rerum? Repudiandae totam cupiditate sed distinctio?</p>
                            </div>

                        </div>

                        <div className="right-box">

                            <div className="right-box-image">
                                    <img src={Offense} alt="offense" />
                            </div>

                            <div className="right-box-heading">
                                <h3>Offense</h3>
                            </div>

                            <div className="right-box-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora quod blanditiis quas, neque, aliquam ratione odio, aut architecto nisi assumenda maiores. Alias officia ducimus maxime! Dolore ducimus similique quisquam, necessitatibus dignissimos nostrum a nisi itaque ea tenetur tempore illum laudantium doloribus neque iure rerum? Repudiandae totam cupiditate sed distinctio?</p>
                            </div>

                        </div>
                            
                    </div>

                </div>




                
            </div>
        )
    }
}