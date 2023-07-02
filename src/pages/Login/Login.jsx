import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <>
        <div className='space'>
          <div className='cont'>
            <div className='dert'>
              <div className='dirt-dert'>
                <div className='title-log'>
                  <h1>
                    Iniciar Sesión
                  </h1>
                </div>
                <div className='login-content'>
                  <div>
                    <label>Usuario: </label>
                  </div>
                  <div>
                    <input placeholder='Username o Email' />
                  </div>
                </div>
                <div className='login-content'>
                  <div>
                    <label>Password: </label>
                  </div>
                  <div>
                    <input placeholder='Password' />
                  </div>
                </div>
                <div className='login-content'>
                  <div>
                    <button className='button-i'>Iniciar Sesión</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default Login;
