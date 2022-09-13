import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link,  useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false);

    const navigateLogin = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    if(loading || updating){
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        console.log('updated profile');
        navigate('/home')

    }

    return (
        <div style={{ textAlign: '', color: '' }} className='register'>
            <h3 style={{ textAlign: 'center' }}> Please Register</h3>

            <form className='' onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Name' />
                <input type="email" name="email" placeholder='Email' id="" />
                <input type="password" name="password" placeholder='Password' id="" />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ps-2' : 'ps-2 text-danger'} htmlFor="terms">Accepts terms and condition</label>
                <input disabled={!agree} className='btn btn-dark w-50 mx-auto mt-2' type="submit" value="Register" />
            </form>
            <p>Allready a member! <Link to= '/login' className='text-primary text-decoration-none ps-1' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;