import Axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';

const StockDetails = () => {
    const [selectedStock, setSelectedStock] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();  // Access the route parameter `id` using useParams
  
    useEffect(() => {
      let dataURL = `https://gist.githubusercontent.com/ravikgupta29/fb09dcc88a3981acaac8efccf57f412b/raw/9670ac9fd27eaa17e54b09dade7ae6e172b4cd70/stocks-12-11-2024.json`;
  
      Axios.get(dataURL)
        .then((response) => {
          const stocks = response.data;
          const selectedStock = stocks.find((stock) => stock.id ===id);  // Ensure it's an integer
          if (selectedStock) {
            setSelectedStock(selectedStock);
          } else {
            setErrorMessage('Stock not found.');
          }
        })
        .catch((error) => {
          setErrorMessage('An error occurred while fetching data.');
        });
    }, [id]);  // Runs whenever `id` changes
  
    return (
      <Fragment>
        <div className='container mt-3'>
          <div className='row'>
            <p className='h3 text-primary'>Stocks Details</p><br/>
            <p className='lead'><br/>
            “यदि आप जीवन में परिवर्तन लाना चाहते हैं तो उसके लिए आपका मानसिक रूप से मजबूत होना आवश्यक है।”
            </p>
          </div>
          <div className='row'>
            <div className='col'>
              {
                Object.keys(selectedStock).length!==0?<Fragment>
                  <div className='card'>
                <div className='card-header bg-primary text-white'>
                  <p className='h4'>{selectedStock.name}</p>
                </div>
                <div className='card-body'>
                  <div className='row align-item-center'>
                    <div className='col'>
                      <ul className='list-group'>
                        <li className='list-group-item list-group-item-primary'>
                          Name:{selectedStock.name}
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                          Market:{selectedStock.market}
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                          Industry:{selectedStock.industry}
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                          Symbol:{selectedStock.symbol}
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                          Sector:{selectedStock.sector}
                        </li>
                      </ul>
  
                    </div>
                  </div>
                </div> 
                <div className='card-footer'>
                  <Link to='/stocks' className='btn btn-primary btn-sm'>Back</Link>
                </div>
              </div>
                </Fragment>:null
              }
              
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  export default StockDetails;
  