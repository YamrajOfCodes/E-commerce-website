import React from 'react'
import Adminsidebar from '../../Components/Admincommon/Adminsidebar'

const Commonlayout = ({children}) => {
  return (
    <>
 <Adminsidebar children={children}/>
    </>
  )
}

export default Commonlayout
