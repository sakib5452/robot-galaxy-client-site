import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logInPic from '../../assets/access-control-system-abstract-concept_335657-3180.avif'
import { AuthContext } from '../../provider/AuthProvider';
import GoogleLogIn from '../GoogleLogIn/GoogleLogIn';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                event.target.reset();
            })
    }
    return (
        <div>
            <div className='mb-44 mt-80 lg:mt-10'>
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <div className=''>
                                <img className='h-96 rounded-lg' src={logInPic} alt="" />
                            </div>
                        </div>
                        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm h-96  shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <p className='text-red-500 text-center'>{error}</p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <h4> Don't Have an Account? <span className='text-primary'><Link to="/register">Register</Link></span></h4>
                            </div>
                            <div className='grid grid-cols-3'>
                                <div className=' w-36 font-bold border-b-2'></div>
                                <div className=' text-xl font-bold ml-16'>or</div>
                                <div className=' w-36 font-bold border-b-2'></div>
                            </div>
                            <GoogleLogIn></GoogleLogIn>
                        </form>
                    </div>
                </div>



                <div>

                </div>
            </div>

        </div>
    );
};

export default Login;