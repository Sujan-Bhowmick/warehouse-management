import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password )

    }

    return (
        <div className='register'>
            <h3>Please Register</h3>

            <form onSubmit={handleRegister} className=' mb-3'> 
                <input type="text" name= "name" placeholder='Name' />
                <input type="email" name="email" placeholder='Email' id="" />
                <input type="password" name="password" placeholder='Password' id="" /> 
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;