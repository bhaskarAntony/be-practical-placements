import React from 'react'
import './style.css'
import Register from '../register/Register'

function Hero() {
  return (
    <section className='hero container-fluid p-3 p-md-4 overflow-hidden'>
      <div className="row">
        <div className="col-12 col-md-6">
            <div className="hero-left">
                <h1 className="display-3 fw-bold">
Providing Best Education For <span className="text-main">Brighter future</span></h1>
<p className="fs-4">
With all your courses, workshops, and memberships in one place, you can sell faster, easier, and save up to 80% of your expenses.
</p>
<div className="btns d-flex gap-3 mt-4 ">
    <a href='#register' className="btn btn-main p-3 rounded-2 px-5 w-100 fs-4">Register Now</a>
    <a href='https://be-practical.com' className="btn btn-light p-3 rounded-2 px-5 w-100 fs-4">Know more</a>
</div>
            </div>
        </div>

        <div className="col-12 col-md-6">
            <div className="hero-right">
                <img src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2-768x731.png" alt="" className='w-100' />
               {/* <img src="https://tf.insomniacafe.org/insocour/assets/img/icon/global.svg" alt="" className="icon1" /> */}
               {/* <img src="https://tf.insomniacafe.org/insocour/assets/img/all-img/hero-img2.png" alt="" className="icon2" /> */}
            </div>
        </div>
      </div>
      <div className="devider"></div>
      <div className="register">
        <h1 className="text-center display-3 text-main fw-bold">Register Now</h1>
        <Register/>
      </div>
    </section>
  )
}

export default Hero
