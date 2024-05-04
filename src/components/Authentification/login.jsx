import React from 'react'
import './style.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence, motion as m } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Adresse email invalide').required('Champ requis'),
    password: Yup.string().required('Champ requis')
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const variants = {
    from_bottom: { opacity: 0, y: '-50%' },
    to_top: { opacity: 1, y: '0%' },

  }

  return (
    <m.div className='auth'
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.01, delay: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="illustration">
        <m.div className='big_slogan'
          initial={"from_bottom"}
          animate={"to_top"}
          transition={{ duration: .2, delay: 0.2 }}
          exit={"from_bottom"}
          variants={variants}
        >
          <span>Here </span>
          <span>you </span>
          <span>Go </span>
          <span>Again </span>

        </m.div>
      </div>
      <m.div className="login"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .2, delay: .3 }}
        exit={{ opacity: 0 }}
      >
        <h1>Login</h1>
        <div className='welcome'>
          <h3>Welcome back</h3>
          <span className='text'>happy to see you here again</span>
        </div>

        <form className='login_form'>
          <input type="text" placeholder='email' />
          <input type="paswword" placeholder='password' />

          <button className='login-button' type='submit'>log in</button>
          <div className='forget-pwd'>Forget password ?</div>
          <div className='or'>- or -</div>

          <Link to="/auth/signup">
            <button className='to-signup-button' type='submit'>create an account</button>

          </Link>

        </form>
      </m.div>
    </m.div>
  )
}

export default Login;