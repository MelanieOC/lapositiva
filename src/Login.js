import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import { signIn } from './actions';

export const Login = () => {
    return (
        <div id='login'>
            <form>
                <div className='logo'>
                    <img src='https://seguroviajero.lapositiva.com.pe/app/assets/icons/logo-la-positiva.png' alt='logo' />
                </div>
                <div className="form-group">
                    <label for="email">DNI:</label>
                    <input type="number" className="form-control" id="email" ref={e => this.emailInputRef = e} />
                </div>
                <NavLink to='/info' className="btn btn-warning btn-large"> Submit </NavLink>
            </form>
        </div>
    )
}