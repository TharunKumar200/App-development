import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import Store from './components/redux/Store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </Provider>,
  root
);
