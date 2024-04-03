import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

const LoadingModal = () => {
    return (
      <div className="loading-modal">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  };

const SpecialMessageModal = ({ show, onClose }) => {
    return (
      show && (
        <div className="modal " style={{ display: show ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content bg-black shadow">
              {/* <div className="modal-header d-flex justify-content-between">
                <h5 className="modal-title text-main">Confirmation</h5>
                <button type="button" className="close btn" onClick={onClose}>
                  <span className='fs-1 text-main'>&times;</span>
                </button>
              </div> */}
              <div className="modal-body d-flex align-items-center justify-content-center flex-column gap-3">
                
              <img src="https://cdn-icons-png.freepik.com/256/3472/3472620.png?ga=GA1.1.874872603.1694171926&" alt="success" />
              <p className='fs-4 text-white mt-4'>
             Success
              </p>
              <a href="https://forms.gle/mULUELFWEEWbHvbb6" target="_blank" className='btn btn-main text-white p-3 w-100 d-block rounded-pill'>Attend Test</a>
               </div>
            </div>
          </div>
        </div>
      )
    );
  };
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    year: '',
    course: 'mern' // Default value
  });
  const [loading, setLoading] = useState(false)

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

   const submitHandler = async (e) => {
        setLoading(true)
          e.preventDefault();
          // Perform final validation here
          // if (influencers.length === 0) {
          //   console.error('Influencers data is not available. Please handle this case.');
          //   return;
          // }
          try {
              axios.post('https://stormy-flannel-nightgown-ox.cyclic.app/api/register/college', formData)
              .then(response => {
                setLoading(false)
                
                // Handle the response data here
               
                setShowModal(true)
                console.log(response);
              })
              .catch(error => {
                // Handle any errors here
                setLoading(false)
                console.error(error);
              });
          } catch (error) {
            // Handle any network errors or server-side errors here
            console.error('Error:', error);
           
          }
      
          
         
      };

if(loading){
    return <LoadingModal/>
}

  return (
    <section className='bg-white p-3 rounded-3 mt-3 text-dark' id='register'>
        <h1 className="fs-3 text-main">Fill Here</h1>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="form-floating mt-2">
              <input type="text" className="form-control" id='name' placeholder='user name' required onChange={handleChange} />
              <label htmlFor="name">Student name</label>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-floating mt-2">
              <input type="email" className="form-control" id='email' placeholder='email' required onChange={handleChange} />
              <label htmlFor="email">Student email</label>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-floating mt-2">
              <input type="text" className="form-control" id='phone' placeholder='phone' required onChange={handleChange} />
              <label htmlFor="phone">Mobile number</label>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="form-floating mt-2">
              <input type="number" className="form-control" id='year' placeholder='year' required onChange={handleChange} />
              <label htmlFor="year">Year of passed out</label>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="form-floating">
              <select name="courses" id="course" className="form-select mt-2" onChange={handleChange} value={formData.course}>
                <option value="mern">Mern fullstack</option>
                <option value="Mean">Mean fullstack</option>
                <option value="Python">Python fullstack</option>
                <option value="Java">Java fullstack</option>
                <option value="Datascience">Datascience</option>
                <option value="CloudOps">CloudOps</option>
              </select>
              <label htmlFor="course" className='bg-transparent'>Select Course</label>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <button type="submit" className="btn-main p-3 rounded-2 mt-2 w-100">Register</button>
          </div>
        </div>
      </form>
      <SpecialMessageModal show={showModal} onClose={() => setShowModal(false)} />
    </section>

  );
}

export default Register;
