import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                           {/* phone number */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="phone" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 1111 517 656
                                    </div>
                                </div>
                            </div>
                            {/* email number */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="phone" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        Shivam@gmail.com
                                    </div>
                                </div>
                            </div>
                            {/* address number */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="phone" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        Pune, IN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Form */}
            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in Touch</div>
                            <form id="contact_form">
                                <div className="contact_form_name d-flex justify-content-between align-items-between">
                                    <input type="text" id="contact_form_name" 
                                        className="conatct_form_name input_field" placeholder="Your Name" required="true"
                                    />

                                    <input type="email" id="contact_form_email" 
                                        className="conatct_form_email input_field" placeholder="Your Email" required="true"
                                    />

                                    <input type="number" id="contact_form_phone" 
                                        className="conatct_form_phone input_field" placeholder="Your Phone" required="true"
                                    />
                                </div>

                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contact_form_message" placeholder="Message" cols="30" rows="10"></textarea>
                                    </div>

                                <div className="contact_form_buttom">
                                    <button type="submit" className="button contact_submit_button">Send Message</button>
                                </div> 
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
