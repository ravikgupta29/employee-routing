import Axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class Employees extends Component {

  constructor(props){
    super(props);
    this.state={
      employees:[],
      errorMessage:''
    }
  }

  componentDidMount(){
    let dataURL=`https://jsonplaceholder.typicode.com/photos`;
    Axios.get(dataURL).then((response)=>{
      this.setState({
        employees:response.data
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
              <p className='h3 text-primary'>Employees</p>
              <p className='lead'>“Believe in the power of your dreams and work diligently to make them a reality.”</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>           
               {/* <pre>{JSON.stringify(this.state.employees)}</pre> */}
            {
              this.state.employees.length>0?<Fragment>
                <table className='table table-header table-striped table-hover table-light text-center'>
                  <thead className='bg-dark text-white'>
                    <tr>
                      <th>Emp Id</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.employees.map((employee)=>{
                        return(
                          <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td><img src={employee.url} width='50' height='50' /></td>
                            <td>
                              {/* {employee.title.slice(0,4)} */}
                              <Link to={`/employee/${employee.id}`} className='text-primary font-weight-bold'>{employee.title.slice(0,4)}</Link>
                              </td>
                            <td>{employee.thumbnailUrl}</td>    
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
