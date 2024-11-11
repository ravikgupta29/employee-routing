import React, { Component, Fragment } from 'react'

export default class About extends Component {
  render() {
    return (
<Fragment>
  <div className='container mt-3'>
   <div className='row'>
    <div className='col-md-8'>
      <div className='card'>
        <div className='card-header bg-dark text-white'>
    <p className='h3'>About Us</p>
    </div>
    <div className='card-body'>
    <p className='lead'><br/>“स्वस्थ तन ही स्वच्छ मन का आधार बनता है, स्वच्छ मन ही स्वतंत्र हर विचार करता है।”</p>
    <p className='h4'>Version :1.0</p>
    <p className='h4'>Author:ravikgupta29</p>
    </div>
    <div className='card-footer'>
      <p className="h3">
        &copy; Copyright {new Date().getFullYear()} ravikgupta29
      </p>
    </div>
    </div>
    </div>
   </div>
   </div>
</Fragment>
      
    )
  }
}
