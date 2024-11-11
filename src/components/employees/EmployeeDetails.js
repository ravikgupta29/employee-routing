import Axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
//import { withRouter } from 'react-router-dom'; v5 only
import { Link, useParams } from 'react-router-dom';

// class EmployeeDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedEmployee: {},
//       errorMessage: '',
//     };
//   }

//   componentDidMount() {
//     const { id } = this.props.match.params;  // Accessing the route parameter directly
//     console.log('Employee ID:', id);  // Log the id for debugging

//     let dataURL = `https://jsonplaceholder.typicode.com/photos`;
    
//     Axios.get(dataURL)
//       .then((response) => {
//         const employees = response.data;
//         const selectedEmployee = employees.find((employee) => employee.id === parseInt(id, 10));  // Ensure it's an integer
//         if (selectedEmployee) {
//           this.setState({ selectedEmployee });
//         } else {
//           this.setState({ errorMessage: 'Employee not found.' });
//         }
//       })
//       .catch((error) => {
//         this.setState({
//           errorMessage: 'An error occurred while fetching data.',
//         });
//       });
//   }

//   render() {
//     const { selectedEmployee, errorMessage } = this.state;
    
//     return (
//       <Fragment>
//         <div className='container mt-3'>
//           <div className='row'>
//             <p className='h3 text-primary'>Employee Details</p>
//             <p className='lead'>
//               Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.
//             </p>
//           </div>
//           <div className='row'>
//             <div className='col'>
//               {errorMessage ? (
//                 <p className='text-danger'>{errorMessage}</p>
//               ) : (
//                 <pre>{JSON.stringify(selectedEmployee, null, 2)}</pre>  
//               )}
//             </div>
//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// }export default withRouter(EmployeeDetails);




const EmployeeDetails = () => {
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const { id } = useParams();  // Access the route parameter `id` using useParams

  useEffect(() => {
    let dataURL = `https://jsonplaceholder.typicode.com/photos`;

    Axios.get(dataURL)
      .then((response) => {
        const employees = response.data;
        const selectedEmployee = employees.find((employee) => employee.id === parseInt(id, 10));  // Ensure it's an integer
        if (selectedEmployee) {
          setSelectedEmployee(selectedEmployee);
        } else {
          setErrorMessage('Employee not found.');
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
          <p className='h3 text-primary'>Employee Details</p>
          <p className='lead'>
            Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.
          </p>
        </div>
        <div className='row'>
          <div className='col'>
            {/* {errorMessage ? (
              <p className='text-danger'>{errorMessage}</p>
            ) : (
              <pre>{JSON.stringify(selectedEmployee, null, 2)}</pre>  
            )} */}

            {
              Object.keys(selectedEmployee).length!==0?<Fragment>
                <div className='card'>
              <div className='card-header bg-primary text-white'>
                <p className='h4'>{selectedEmployee.title.slice(0,7)}</p>
              </div>
              <div className='card-body'>
                <div className='row align-item-center'>
                  <div className='col-md-4'>
                  <img src={selectedEmployee.url} className='img-fluid img-thumbnail d-block m-auto' height='150' width='150' />
                  </div>
                  <div className='col-md-8'>
                    <ul className='list-group'>
                      <li className='list-group-item list-group-item-primary'>
                        ID:{selectedEmployee.id}
                      </li>
                      <li className='list-group-item list-group-item-primary'>
                        THUMBNAIL:{selectedEmployee.thumbnailUrl}
                      </li>
                      <li className='list-group-item list-group-item-primary'>
                        ID:{selectedEmployee.url}
                      </li>
                    </ul>

                  </div>
                </div>
              </div> 
              <div className='card-footer'>
                <Link to='/employees' className='btn btn-primary btn-sm'>Back</Link>
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
export default EmployeeDetails;
