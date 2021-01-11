import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './common/input';
import Joi from 'joi-browser';
import '../css/signInForm.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import setLocalStorage from '../utils/setLocalStorage';
function SignInForm(props) {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const [Errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const EntireSchema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .label('Email'),
    password: Joi.string()
      .required()
      .label('Password')
      .alphanum()
      .min(6)
      .max(30),
  };
  const history = useHistory();
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(userInput, EntireSchema, options);
    if (!error) return null;
    const errors = {};
    for (let items of error.details) {
      errors[items.path[0]] = items.message;
    }

    return errors;
  };
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaField = { [name]: EntireSchema[name] };
    const { error } = Joi.validate(obj, schemaField);
    return error ? error.details[0].message : null;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
    const errorMessage = validateProperty(e.target);
    if (errorMessage) Errors[name] = errorMessage;
    else delete Errors[name];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    doSubmit();
  };
  const validateSubmit = (data) => {
    if (data.length === 0) {
      toast.error(`Such user doesn't exist.`);
    } else {
      if (
        data[0].password !== userInput.password ||
        data[0].email !== userInput.email
      ) {
        toast.error('Wrong email or password.');
      } else {
        const { username} = data[0];
        
        setLocalStorage(username);
        history.push('/allposts');
      }
    }
  };
  const doSubmit = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/users?q=${userInput.email}`
    );
    validateSubmit(data);
  };
  return (
    <div className='form'>
      <form className='sign-form' onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <hr />
        <Input
          value={userInput.email}
          name='email'
          onChange={handleChange}
          id='email'
          type='email'
          label='Email'
          error={Errors.email}
        />

        <Input
          value={userInput.password}
          name='password'
          onChange={handleChange}
          id='password'
          type='password'
          label='Password'
          error={Errors.password}
        />

        <button disabled={validate()} className='btn btn-primary'>
          Sign In
        </button>
        <p>
          Don't have an account yet? Register{' '}
          <Link to='/registration' className='register'>
            now
          </Link>
          !
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
