import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './Signup.js';
import Details from './Details.js';
import Movies from './Front.js'
import TV from './Tvsh.js';
import Home from './Test.js';

const App = () => {

  
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/Details" element={<Details />} />
                <Route path="/TV" element={<TV />} />
            </Routes>
        </Router>
    );
};

export default App;