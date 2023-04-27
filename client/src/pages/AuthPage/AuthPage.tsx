import React, { useState } from 'react';
import './form.css';

export default function Auth(): JSX.Element {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  const toggleSwitch = (): void => {
    setIsSignIn(!isSignIn);
  };
  
  return (
    <div className="Auth">
      <div className="Container">
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
