import React, {useState} from 'react'
import {NavLink, useHistory} from "react-router-dom";
import signpic from "../images/marvel.svg";



const Signup = () => {
    const history = useHistory();
    const [user,setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    })
    
    let name,value;
    
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    }

    const PostData = async (e) =>{
        e.preventDefault();
        const {name, email, phone, work, password, cpassword} = user;
        
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
       
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }else{
            window.alert(`Successfully Registered ${res}`)
            console.log(`Successfully Registered ${res}`);
            history.push("/login");
        }
    }
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div style={{"background-color":"yellow"}} className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form method="POST" className="register-form" id="register-form">
                               
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account materials-icon-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placehlder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email materials-icon-name"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placehlder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk materials-icon-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        placehlder="Your Phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-slideshow materials-icon-name"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        value={user.work}
                                        onChange={handleInputs}
                                        placehlder="Your Profession" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock materials-icon-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placehlder="Your Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock materials-icon-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placehlder="Confirm Your Password" />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register" 
                                    onClick={PostData}
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
