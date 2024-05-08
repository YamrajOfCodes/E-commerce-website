import React from 'react'
import "./adminusertable.scss"
import Table from 'react-bootstrap/Table';
import shoeimage from "./logo512.png"
import Dropdown from 'react-bootstrap/Dropdown';


const Adminusertable = () => {
  return (
    <>
     <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full name</th>
          <th>Email</th>
          <th>Profile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>harsh</td>
          <td>harsh@gmail.com</td>
          <td><img src={shoeimage} style={{width:'30px'}} alt="" srcset="" /></td>
          <td>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
        <i class="fa-solid fa-trash"></i>&nbsp;
            Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </td>
        </tr>
        <tr>
        <td>2</td>
          <td>harsh</td>
          <td>harsh@gmail.com</td>
          <td><img src={shoeimage} style={{width:'30px'}} alt="" srcset="" /></td>
          <td>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
        <i class="fa-solid fa-trash"></i>&nbsp;
            Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </td>
        </tr>
        <tr>
        <td>3</td>
          <td>harsh</td>
          <td>harsh@gmail.com</td>
          <td><img src={shoeimage} style={{width:'30px'}} alt="" srcset="" /></td>
          <td>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
        <i class="fa-solid fa-trash"></i>&nbsp;
            Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default Adminusertable
