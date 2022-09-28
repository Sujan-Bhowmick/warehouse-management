import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google1.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    if(loading){
        return <Loading></Loading>
    }

    let errorElement;
    if(error){
      errorElement = <p className='text-danger'>Error: {error.message}</p>
    
    }

    if(user){
        navigate('/home')
    }
    return (
       
        <div>
            
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='w-50 bg-primary'></div>
               
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={ () => signInWithGoogle()} className= 'btn btn-dark my-2 w-50'>
                <img style={{height: '20px'}} src= {google} alt="" />
                   <span className='px-1'> Google Sign In</span>  
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin; 