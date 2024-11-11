import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                    <div className='container'>
                        {/* <a href='/' className='navbar-brand'>React Routing</a> */} 
                        <Link to="/" className='navbar-brand'>React Routing</Link>
                        <div className='collapse navbar-collapse'>
                            <ul className='navbar-nav'>
                                <li className='nav-item px-2'>
                                    {/* <a href='/' className='nav-link'>Home</a> */}
                                    <Link to="/" className='navbar-brand'>Home</Link>
                                </li>
                                <li className='nav-item px-2'>
                                    {/* <a href='/about' className='nav-link '>About Us</a> */}
                                    <Link to="/about" className='navbar-brand'>About Us</Link>
                                </li>
                                <li className='nav-item px-2'>
                                    {/* <a href='/employees' className='nav-link'>Employees</a> */}
                                    <Link to="/employees" className='navbar-brand'>Employees</Link>
                                </li>
                                <li className='nav-item px-2'>
                                    {/* <a href='/stocks' className='nav-link'>Stocks</a> */}
                                    <Link to="/stocks" className='navbar-brand'>Stocks</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
            // <div>Navbar</div>
        )
    }
} 
