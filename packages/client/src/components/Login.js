// 'Authorization': 'Bearer ' + auth_token

import React, { useState, useCallback } from 'react'
import Router from 'next/router'
import { API_ENDPOINTS } from '../../settings';
const Login = () => {

  const [inputValues, setInputValues] = useState({ email: '', password: '' });

  const userLogin = async (inputValues) => {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password
      })
    };
    try {
      const fetchResponse = await fetch(API_ENDPOINTS.login, config);
      const data = await fetchResponse.json();
      if (data.users) {
        localStorage.setItem("token", data.users.token);
        Router.push('/shopping-centers');
      }
    } catch (e) {
      return e;
    }
  };
   
  const onSubmit = (event) => {
    event.preventDefault();
    userLogin(inputValues);
  }

  
  const handleOnChange = useCallback(event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  });

  return (
    <div style={{
      marginTop: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="card bg-light mb-3" style={{ maxWidth: `30rem` }}>
        <div className="card-body">
          <div className="card-body">
            <form onSubmit={(event) => onSubmit(event)}>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input type="email" name="email" onChange={handleOnChange} className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" name="password" onChange={handleOnChange} className="form-control" id="inputPassword" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-secondary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
