import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <div className="left" style={{ paddingTop: '5px' }}>
                    <Link to='/' className="brand-logo"><img class="ui small image" src="https://i0.wp.com/tedxriga.com/wp-content/uploads/2018/05/tedxriga-logo.png?fit=300%2C99"></img></Link>
               </div>
                { links }
            </div>
        </nav>

    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)


