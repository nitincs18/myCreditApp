import axios from "axios";
import { FETCH_USER } from './types'
import * as constant from '../utils/constant';
// import { Route, Redirect } from 'react-router'
// import React, { Component } from 'react';

export const client = axios.create({
    baseURL: constant.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "schema": JSON.parse(localStorage.getItem('userProfile')) !== null ? JSON.parse(localStorage.getItem('userProfile')).schemaName : window.location.pathname.split("/")[1]
    },
})
/* Send token to backend for authentication */
client.interceptors.request.use((request) => {
    request.headers['x-auth-token'] = localStorage.getItem("authToken");
    return request;
});

// export const fetchUser = () => dispatch => {
//         axios
//         .get('/api/current_user')
//         .then(res => dispatch({type: FETCH_USER,payload:res}))
//     }

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({type: FETCH_USER,payload:res.data});
}

export const handleToken = (token) => async dispatch =>{
    const res = await axios.post('/api/stripe', token);

    dispatch( { type: FETCH_USER, payload: res.data });
}