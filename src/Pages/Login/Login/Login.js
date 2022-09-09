import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
   
  if(sending || loading){
    return <Loading></Loading>
  }
  
  let errorElement;

  if(error){
    errorElement = <p className='text-danger'>Error: {error.message}</p>
  }

  

  if(user){
    navigate(from, {replace: true});
  }

  const resetPassword = async() => {
    const email = emailRef.current.value;
   if(email){
    await sendPasswordResetEmail(email)
    toast('Sent email')
   }
   else{
    toast('Please enter your email address')
   }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
    signInWithEmailAndPassword(email, password)
  };


  const navigateRegister = () => {
    navigate('/register')
  }

  return (
    <div className='container w-50 mx-auto'>
      
      <h3 className='mt-2 text-center'>Please login</h3>
    
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button className='w-50' variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p className='mt-2'>Not a member? <Link className='ms-2 text-decoration-none' to='/register' onClick={navigateRegister}>Register</Link></p>
      <p>Forget Password?<button className='text-danger btn btn-link text-decoration-none mb-1' onClick={resetPassword}>Reset Password</button></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>

  );
}



export default Login;