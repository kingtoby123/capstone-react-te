import React from 'react'
import { NavLink } from "react-router-dom";


{/* social media, company{about, blog, contact},  */}
export default function footer(props) {
    return (
        <div className="footer-wrapper">
          <div className="company-wrapper">
              <h3>Company</h3>

              <div className="nav-link-wrapper">
                <NavLink to="/" activeClassName="nav-link-active-footer">
                  Home
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/about-me" activeClassName="nav-link-active-footer">
                  About Me
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/contact" activeClassName="nav-link-active-footer">
                  Contact
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/login" activeClassName="nav-link-active-footer">
                  Login
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/drills" activeClassName="nav-link-active-footer">
                  Drills
                </NavLink>
              </div>

          </div>


            <div className="social-media">
                <div className="social-media-wrapper">
                    <h3>Social Media</h3>
                    <div className="instagram">
                        <a href="https://www.instagram.com/kinghoops132/">Instagram</a>
                    </div>

                    <div className="twitter">
                        <a href="https://twitter.com/KingHoops132">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}