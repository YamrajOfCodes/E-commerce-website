import React from 'react'

import Table from 'react-bootstrap/Table';
import shoeimage from "./shoes.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';


const Orders = () => {
  return (
    <>
    <h2 className='text-center mb-2'>Orders</h2>
      <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Total price</th>
          <th>Order items</th>
          <th>User ID</th>
          <th>&nbsp;&nbsp;&nbsp;staus</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1200</td>
          <td>4</td>
          <td>2345</td>
          <td>delivered</td>
          <td>
          <div>
            <i className='fa-solid fa-trash' style={{color:'red'}}></i>
          </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>1200</td>
          <td>4</td>
          <td>2345</td>
          <td>delivered</td>
          <td>
          <div>
            <i className='fa-solid fa-trash' style={{color:'red'}}></i>
          </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>1200</td>
          <td>4</td>
          <td>2345</td>
          <td>delivered</td>
          <td>
          <div>
            <i className='fa-solid fa-trash' style={{color:'red'}}></i>
          </div>
          </td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default Orders
