import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './sign-in-up.styles.scss'

const SignInUp = ({ currentUser }) => (
    <div className='sign-in-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInUp;