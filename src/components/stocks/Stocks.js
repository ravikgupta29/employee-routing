import Axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class Stocks extends Component {

  constructor(props){
    super(props);
    this.state={
      stocks:[],
      errorMessage:''
    }
  }

  componentDidMount(){
  let dataURL=`https://gist.githubusercontent.com/ravikgupta29/fb09dcc88a3981acaac8efccf57f412b/raw/9670ac9fd27eaa17e54b09dade7ae6e172b4cd70/stocks-12-11-2024.json`;

  Axios.get(dataURL).then((response)=>{
    this.setState({
      stocks:response.data
    });
      
  }).catch((error)=>{
    this.setState({
      errorMessage:error
    });
    
  });
  }


  render() {
    return (
      <Fragment>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col'>
              <p className='h3 text-primary'>Stocks</p>
              <p className='lead'>“कर्मों की ऊँगली पकड़कर ही मानव निज कर्तव्यपथ पर चलना सीखता है।”</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
            {
              this.state.stocks.length>0?<Fragment>
                <table className='table table-header table-striped table-hover table-light text-center'>
                  <thead className='bg-dark text-white'>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Market</th>
                      <th>Industry</th>
                      <th>Symbol</th>
                      <th>Sector</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.stocks.map((stock)=>{
                        return(
                          <tr key={stock.id}>
                            <td>{stock.id.substr(stock.id.length-4)}</td>
                            <td >
                              {/* {employee.title.slice(0,4)} */}
                              <Link to={`/stocks/${stock.id}`} className='text-primary font-weight-bold'>{stock.name}</Link>
                              </td>
                            <td>{stock.market}</td>    
                            <td>{stock.industry}</td>    
                            <td>{stock.symbol}</td>    
                            <td>{stock.sector}</td>    
                            </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </Fragment>:null
            }

            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
