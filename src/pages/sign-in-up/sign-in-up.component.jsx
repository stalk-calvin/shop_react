import React from 'react';

import SignIn from '../../components/signin/signin.component';
import HomePage from '../homepage/homepage.component';

import './sign-in-up.styles.scss'

const SignInUp = ({ currentUser }) => (
    <div className='sign-in-up'>
    {
        currentUser ? <HomePage /> : <SignIn />
    }
    </div>
);

export default SignInUp;