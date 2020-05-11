import React from 'react';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// const navItems = [
//   { name: 'about', label: 'About'},
//   { name: 'projects', label: 'Projects' },
//   { name: 'contact', label: 'Contact' },
// ]

  function App() {
    return (
      <div className="App">
        <header className='app-header2'></header>
        <body className='app-body'>
          <Navbar></Navbar>
        </body>
      </div>
  );
}

export default App;
