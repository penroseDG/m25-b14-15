import React from 'react'

/*
    dùng fetch đi lấy dữ liệu và render dữ liệu với render dữ liệu ở phía server

*/

async function getData() {
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data=res.json()
    return data
}

export default async function Page() {
    const users=await getData();
  return (
    <div>
      tìm nạp dữ liệu server với fetch
      {users.map((item:any)=>{
        return <li key={item.id}>{item.name}</li>
      })}
    </div>
  )
}