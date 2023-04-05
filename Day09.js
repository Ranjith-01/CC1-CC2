
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById("root"));
Index.js
import React from 'react'
import Home from './Home'
import NavBar from './NavBar';
import Singers from './Singers';
import Albums from './Albums';

import { Route,Routes } from 'react-router-dom';


export default function App() {
  return (
    <> 
      <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
    </>
  )
}
App.jsx
import React from 'react';


export default function Home() {
    return (
        <div>
            <h3 className='mt-5 pt-5 text-center'>Welcome to Music Player !!</h3>
        </div>
    )
}
Home.js
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Singers from './Singers'
import Albums from './Albums'
import Home from './Home'


export default function Day9() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" style={{ marginLeft: "20px" }}>Music Player</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                            <Link to="/" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Home</a></Link>
                            <Link to="/singers" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Singers</a></Link>
                            <Link to="/albums" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Albums</a></Link>



                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.js
import React from 'react'

export default function Singers() {
  return (
    <div>
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Harry Styles</td>
            <td>2010</td>
          </tr>
          <tr>
            <td scope='row'>Taylor Swift</td>
            <td>2010</td>
          </tr>
          <tr>
            <td scope='row'>Zayn Malik</td>
            <td>2022</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
Singers.js
import React from 'react'

export default function Albums() {
  return (
    <div>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Albums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Harry Styles</td>
            <td>Three Studio's</td>
          </tr>
          <tr>
            <td scope='row'>Taylor Swift</td>
            <td>Fearless</td>
          </tr>
          <tr>
            <td scope='row'>Zayn Malik</td>
            <td>Midnight Memories</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
Albums.js