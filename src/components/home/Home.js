import React, { Component, Fragment } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
        <Fragment>
<div className='landing-page'>
    <div className='wrapper'>
        <div className='d-flex flex-column justify-content-center text-center align-items-center h-100'>
            <h2>Welcome to React Routing</h2>
            <p className='lead p-3'>“Success is not how high you have climbed, but how you make a positive difference to the world.”</p>
        </div>
    </div>
</div>
        </Fragment>
      //<div>Home</div>
    )
  }
}
