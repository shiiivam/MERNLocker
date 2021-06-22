import React from 'react'
// import profilepic from "../images/profilepic.png";

const About = () => {
    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="" alt="profile pic" />
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Shivam Sharma</h5>
                                <h6>Full Stack Developer</h6>
                                <p className="profile-rating mt-3 mb-5">RANKINGS: <span>5</span></p>
                                {/* Tab code from bootstrap */}
                                <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Profile</a>
                                        </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAndMore" value="Edit Profile" />

                        </div>
                    </div>
                    <div className="row">
                        {/* left side url */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p> WORK LINK</p>
                                <a href="" >Youtube</a><br/>
                                <a href="" >Instagram</a><br/>
                                <a href="" >Facebook</a><br/>
                                <a href="" >Figma</a><br/>
                                <a href="" >Software Engineer</a><br/>
                            </div>
                        </div>
                        {/* right side data toggle */}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" area-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>65367837</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Shivam Sharma</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Shivam Sharma</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Shivam Sharma</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Shivam Sharma</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
