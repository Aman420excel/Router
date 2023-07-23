import React from 'react'
import Login from './Login';

const Protected = (props) => {

    const {Component} = props;

  return (
    <div>

        <Login Component={Component}></Login>
    </div>
  )
}

export default Protected
