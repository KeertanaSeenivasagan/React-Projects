
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Join from './Joinus';
const routing = (
    <Router>
        <div>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/a" element={<About/>} />
                <Route path="/j" element={<Join/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
