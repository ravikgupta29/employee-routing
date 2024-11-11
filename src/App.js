import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Employees from './components/employees/Employees';
import Stocks from './components/stocks/Stocks';
import About from './components/about/About';
import React from 'react';
import EmployeeDetails from './components/employees/EmployeeDetails';
import PageNotFound from './components/exception/PageNotFound';
import StockDetails from './components/stocks/StockDetails';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/'  Component={Home} />
            <Route path='*' Component={PageNotFound} />
            <Route path='/employees' Component={Employees} />
            <Route path='/employee/:id' element={<EmployeeDetails id={URLSearchParams.id} ></EmployeeDetails >} />
            <Route path='/stocks' Component={Stocks} />
            <Route path='/stocks/:id' element={<StockDetails id={URLSearchParams.id} ></StockDetails>} />
            <Route path='/about' Component={About} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}  
export default App;
