import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Talks</NavLink></li>
            <li><NavLink to='/tedxriga2019'>TEDxRIGA 2019</NavLink></li>
            <li><NavLink to='/create'>Create new post</NavLink></li>
            <li><NavLink to='/newuser'>Create User</NavLink></li>
            <li><NavLink to='/imgupload'>Upload Media</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{ props.profile.initials }</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)