import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Registration.module.css';
// import axios from 'axios'


const Registration = () => {
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        setLogin(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };


    let onSubmitPostRegister = () => {

        const body = JSON.stringify({'login': login, 'password': password});
        // axios.post(
        //     'http://127.0.0.1:5000/api/register', 
        //     body, 
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             "Access-Control-Allow-Origin": "*"
        //         }
        //     }
        // )
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
        setLogin("");
        setPassword("");
        console.log(body);
    };


    return (
        <div className={s.MainRegistrationBar}>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Authorization">Authorization</NavLink>
            </div>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Registration">Registration</NavLink>
            </div>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Game">Game</NavLink>
            </div>
            <div className={s.FormRegistration}>
                <div className={s.DivNamePole}>Login</div>
                <input
                    value={login}
                    onChange={handleLogin}>
                </input>
                <div className={s.DivNamePole}>Password</div>
                <input
                    type="password"
                    value={password}
                    onChange={handlePassword}>
                </input>
                <button className={s.ButtonRegister} onClick={onSubmitPostRegister}>Authorization</button>
            </div>
        </div>
        
    )
};

export default Registration