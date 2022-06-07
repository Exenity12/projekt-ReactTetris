import {React, useState} from 'react';
import { NavLink } from 'react-router-dom';
import s from './Authorization.module.css';
// import axios from 'axios'

const Authorization = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        setLogin(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    let onSubmitPostLogin = () => {
        const body = JSON.stringify({'login': login, 'password': password});
        // axios.post(
        //     'http://127.0.0.1:5000/api/login', 
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
        //     if (response.status === 403) {
        //         console.log('login already in use');
        //     }
        //     else {
        //         let routeData = this.$router.resolve({name: 'Login'});
        //         window.open(routeData.href, '_blank');
        //     }
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
        setLogin("");
        setPassword("");
        console.log(body);
    }

    // let getScoreGetScore = () => { 
    //     axios.get(
    //     'http://127.0.0.1:5000/api/score', 
    //         {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 "Access-Control-Allow-Origin": "*"
    //             }
    //         }
    //     )
    //     .then((response) => {
    //         console.log(response.data.score);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // }
 
    return (
        <div className={s.MainAuthorizationBar}>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Authorization">Authorization</NavLink>
            </div>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Registration">Registration</NavLink>
            </div>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Game">Game</NavLink>
            </div>
            <div className={s.FormAuthorization}>
                <div className={s.DivNamePole}>Login</div>
                <input
                    onChange={handleLogin}
                    value={login}>
                </input>
                <div className={s.DivNamePole}>Password</div>
                <input
                type="password"
                    value={password}
                    onChange={handlePassword}>
                </input>
            </div>
            <button className={s.ButtonAuthorization} onClick={onSubmitPostLogin}>Log in</button>
        </div>
    )
};

export default Authorization