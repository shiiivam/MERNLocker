import React from 'react'
import {NavLink} from "react-router-dom";
import signpic from "../images/marvel.svg";


const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div style={{"background-color":"yellow"}} className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form className="register-form" id="register-form">
                               
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account materials-icon-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        placehlder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email materials-icon-name"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        placehlder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk materials-icon-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        placehlder="Your Phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-slideshow materials-icon-name"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        placehlder="Your Profession" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock materials-icon-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        placehlder="Your Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock materials-icon-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        placehlder="Confirm Your Password" />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register" 
                                    />
                                </div>
                            </form>
                        </div>
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} style={{"height":"300px","width":"200px"}}alt="registration pic" />
                                </figure>
                                <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
                        
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
