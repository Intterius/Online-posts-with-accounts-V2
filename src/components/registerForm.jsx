import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './common/input';
import { useHistory } from 'react-router-dom';
import Joi from 'joi-browser';
import '../css/signInForm.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import setLocalStorage from '../utils/setLocalStorage';
function RegisterForm(props) {
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [Errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
  });
  const history = useHistory();
  const EntireSchema = {
    username: Joi.string()
      .required()
      .label('Username')
      .alphanum()
      .min(4)
      .max(15),
    password: Joi.string()
      .required()
      .label('Password')
      .alphanum()
      .min(6)
      .max(30),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .label('Email'),
  };
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
  const validateSubmit = async (data) => {
    if (data.length === 0) {
      await axios.post('http://localhost:3000/users', {
        username: userInput.username,
        password: userInput.password,
        email: userInput.email,
      });

      setLocalStorage(userInput.username);

      history.push('/allposts');
    } else {
      toast.error('Such user already exists.');
    }
  };
  const doSubmit = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/users?q=${userInput.username}`
    );
    validateSubmit(data);
  };
  return (
    <div className='form'>
      <form className='sign-form' onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <hr />
        <Input
          value={userInput.username}
          name='username'
          onChange={handleChange}
          id='username'
          type='username'
          label='Username'
          error={Errors.username}
        />

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

        <button disabled={validate()} className='btn btn-primary flex'>
          Register
        </button>
        <p>
          Already have an account?{' '}
          <Link to='/sign-in' className='sign-in'>
            Sign in!
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
