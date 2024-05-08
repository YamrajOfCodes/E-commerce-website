import React from 'react'
import "./Admin.scss"
import Adminusertable from '../../Components/adminusertable/Adminusertable'

const Admindashboard = () => {
  return (
    <>
    <div className="section py-5 mt-5">
        <div className="card border px-4 py-3 shadow">
       <h4>Total Order</h4>
       <div className="number">
        <h4>4</h4>
        <i class="fa-regular fa-circle fs-2"></i>
       </div>
       <div className="flex">
       <i class="fa-regular fa-square"></i>
       <span>Up from yesterday</span>
       </div>
        </div>
        <div className="card border px-4 py-3 shadow">
       <h4>Total Order</h4>
       <div className="number">
        <h4>4</h4>
        <i class="fa-regular fa-circle fs-2"></i>
       </div>
       <div className="flex">
       <i class="fa-regular fa-square"></i>
       <span>Up from yesterday</span>
       </div>
        </div>
        <div className="card border px-4 py-3 shadow">
       <h4>Total Products</h4>
       <div className="number">
        <h4>6</h4>
        <i class="fa-regular fa-circle fs-2"></i>
       </div>
       <div className="flex">
       <i class="fa-regular fa-square"></i>
       <span>Up from yesterday</span>
       </div>
        </div>
        <div className="card border px-4 py-3 shadow">
       <h4>Users</h4>
       <div className="number">
        <h4>5</h4>
        <i class="fa-regular fa-circle fs-2"></i>
       </div>
       <div className="flex">
       <i class="fa-regular fa-square"></i>
       <span>Up from yesterday</span>
       </div>
        </div>
    </div>
    <section className='section-2 p-3'>
        <h2>Recent Sales  <br />users</h2>
        <div className="table">
            <Adminusertable/>
        </div>
    </section>
    </>
  )
}

export default Admindashboard
