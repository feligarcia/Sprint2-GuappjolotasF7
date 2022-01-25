import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from '../containers/Principal';

export default class AppRouter extends Component {
  render() {
    return <div>
        <BrowserRouter >
            <Routes>
                <Route path="/" element ={<Principal />} />
            </Routes>
        
        </BrowserRouter>
    </div>;
  }
}
