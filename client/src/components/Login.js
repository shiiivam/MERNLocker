import React from 'react'
import loginpic from "../images/loginpic.svg";
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                    <div className="signin-image">
                            <figure>
                                <img src={loginpic} style={{"height":"300px","width":"400px"}}alt="Login pic" />
                            </figure>
                        <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                    </div>

                        <div className="signin-form">
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
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock materials-icon-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        placehlder="Your Password" />
                                </div>
                                
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log In" 
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
