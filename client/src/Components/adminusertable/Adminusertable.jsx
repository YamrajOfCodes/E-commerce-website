import React, { useEffect } from 'react'
import "./adminusertable.scss"
import Table from 'react-bootstrap/Table';
import shoeimage from "./logo512.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { DeleteUser } from '../../Redux/Slice/Userslice/userauthSlice';
import { useDispatch, useSelector } from 'react-redux';


const Adminusertable = ({getusers,page}) => {

  const {deleteuser}=useSelector((state)=>state.user)
  
  const dispatch=useDispatch();
  
  const deleteusers=(e)=>{
    
    const data={
      userId:e
    }
    dispatch(DeleteUser(data));
  
  
  }

  useEffect(()=>{

  },[deleteuser])

  // console.log(getusers[0].userdata);
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

      {
          getusers[0]?.userdata?.length > 0 ? getusers[0].userdata.map((element,index)=>{
            return(
              <>
                <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{element?.Firstname}</td>
          <td>{element?.email}</td>
          <td><img src={element?.userprofile} style={{width:'30px'}} alt="" srcset="" /></td>
          <td>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(e)=>{deleteusers(element._id)}}>
        <i class="fa-solid fa-trash"></i>&nbsp;
            Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </td>
        </tr>
  
      </tbody>
              
              </>
            )
          })    :"No users here"
        }
    
    </Table>
  
    </>
  )
}

export default Adminusertable
