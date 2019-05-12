import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/tedxriga2019'>TEDxRIGA 2019</NavLink></li>
            <li><NavLink to='/'>Speeches</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks