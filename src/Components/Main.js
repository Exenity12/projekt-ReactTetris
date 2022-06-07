import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Main.module.css';
// import { useHistory } from 'react-router-dom';




const Main = () => {

    // const history = useHistory();

    // const redirect = () => {
    //   history.push('/login');
    // }

    

    return (
        <div className={s.MainHeader}>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Authorization">Authorization</NavLink>
            </div>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Registration">Registration</NavLink>
            </div>
            <div className={s.MainHeaderItem}>
                <NavLink style={{ textDecoration:'none', color: "darkblue" }} to="/Game">Game</NavLink>
            </div>
            {/* <button onClick={redirect}>Log in</button> */}
        </div>
        
    )
};

export default Main