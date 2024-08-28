import React from 'react'
import axios from "axios";

async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users") ;
  console.log(" giá trị res ",res)
  return res.data 
}

export default async function page() {
  const users = await getData();
  return (
    <div>
       tìm nạp dữ liệu server bằng axios ! 
       
       {users.map((item : any ) => {
          return <li>{item.name}</li>
        })
       }
    </div>
  )
}
