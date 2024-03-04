import React, { useState } from 'react'
import List from './List'

const ListItem = () => {
   const arr=[1,2,3,4,5]
  return (
    <>
{arr.map(item=> <List/>)}

    </>
  )
}

export default ListItem