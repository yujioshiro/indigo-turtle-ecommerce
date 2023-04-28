import React, { useState } from 'react';
import './form.css';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Auth(): JSX.Element {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  interface SignUpValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

  interface SignInValues {
    username: string;
    password: string;
  }

  const navigate = useNavigate();
  const instance = axios.create({
    baseURL: 'api',
    withCredentials: true,
  });

  const onSubmit = async (values: { isSignIn: boolean; SignInValues?: SignInValues; SignUpValues?: SignUpValues }): Promise<void> => {
    const { isSignIn, SignInValues, SignUpValues } = values;

    try { 
      {
      isSignIn?
      await instance.post('/login', {
        username: SignInValues?.username,
        password: SignInValues?.password,
      })
      :
      await instance.post('/register', {
        username: SignUpValues?.username,
        email: SignUpValues?.email,
        password: SignUpValues?.password,
      })
      console.log("User registered successfully")
      }
      
      navigate('/ProductPage');
    } catch (error) {
      console.error(error);
    }
  }

  const toggleSwitch = (): void => {
    setIsSignIn(!isSignIn);
  };
  
  return (
    <div className="Auth">
      <div className="Container bg-indigo-500">
        <h2>{isSignIn?'Sign In' : 'Sign up'}</h2>
        <div className="Toggle">
          <div
            className={isSignIn ? 'ToggleBtn Active' : 'ToggleBtn'}
            onClick={toggleSwitch}
          />
          <div
            className={!isSignIn ? 'ToggleBtn Active' : 'ToggleBtn'}
            onClick={toggleSwitch}
          />
        </div>
        <form>
          <label>Username: </label>
          <input type="text" />

          {isSignIn ? null : (
            <>
              <label>Email: </label>
              <input type="text" />
            </>
          )}

          <label>Password: </label>
          <input type="password" />

          {isSignIn ? null : (
            <>
              <label>Confirm Password: </label>
              <input type="password" />
            </>
          )}

          {isSignIn ? null : (
            <>
              <label>Address: </label>
              <input type="text" />
            </>
          )}

          <div className="submit">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
