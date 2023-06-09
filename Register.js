import React, {useState,setState} from 'react';
import './loginpage.css'
import './style.css';
export default function Loginpage() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "MiddleName"){
            setLastName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    return(
        <form action='https://app.netlify.com/teams/ranjith-01/overview'>
        <div>
        <h1 id="h"><b>Welcome to my page</b></h1>
        <marquee id="m">here you can sign up and you will see my profile</marquee>
        </div>
        <div className="form" id='m'>
        <h class="s"><b>SIGN IN</b></h>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name: </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="Middlename">
                <label className="form__label" for="MiddleName">Middle Name: </label>
                <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="MiddleName"/>
            </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name: </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email: </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn" ><a href='https://ranjith-kumar-v3.github.io/web-profile/?' >Sign up</a></button>
            </div>
        </div>
        </form>
    )       
}