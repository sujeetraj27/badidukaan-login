import React from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'


const PhoneandPassword = () => {

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory

    const validateForm = () => {
        return phone.length > 0 && password.length > 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {phone: phone, password: password}
        //console.log("hello")     
        localStorage.setItem('user login',JSON.stringify(newEntry))
       

    }


    return (
        <div className="loginwith_mobile">
        <div className="mobile__login">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="number"
                        className="mob__numnber"
                        placeholder="Enter Mobile Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                        
                </div>
                <div>
                    <input
                        type="password"
                        className="mob__numnber"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                   
                </div>
                <button type="submit" disabled={!validateForm()}>Submit</button>
            </form>

        </div>
        </div>

        
    );
}

export default PhoneandPassword;
