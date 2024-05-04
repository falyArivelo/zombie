import React from 'react'
import './style.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence, motion as m } from 'framer-motion';

import { Link, useLocation } from 'react-router-dom';

const Signup = () => {
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
        transition={{ duration: 0, delay: 0 }}
        exit={{ opacity: 0 }}
        >

            <div className="illustration">
                <m.div className='big_slogan'
                    initial={"from_bottom"}
                    animate={"to_top"}
                    transition={{ duration: 1, delay: 0.2 }}
                    exit={"from_bottom"}
                    variants={variants}
                >
                    Begin the adventure
                </m.div>
            </div>

            <m.div className="signup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: .3 }}
                exit={{ opacity: 0 }}
            >
                <h1>Sign up</h1>
                <div className='welcome'>
                    <h3>Welcome to Oh my boo ! </h3>
                    <span className='text'>Be a part of our adventure</span>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form className='signup_form'>
                        <div className="form-element">
                            <Field type="text" name="email" placeholder='email' />
                            <ErrorMessage className='error' name="email" component="div" />
                        </div>

                        <div className="form-element">
                            <Field type="password" name="password" placeholder='password' />
                            <ErrorMessage className='error' name="password" component="div" />
                        </div>

                        <button className='signup-button hoverable' type='submit'>Create your account</button>
                        <div className='or'>- or -</div>

                        <button className='signup-ggl hoverable' type='submit'>Continue with Google</button>

                        <div className='have-account hoverable'>Already have an account ?<span>
                            <Link to='/auth/login'>
                                Log in
                            </Link>

                        </span></div>

                    </Form>
                </Formik>

            </m.div>


        </m.div>
    )
}

export default Signup;