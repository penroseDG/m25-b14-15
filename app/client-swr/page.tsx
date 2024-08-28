import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
// viết hàm đi lấy data 
const getData = (url : string ) => {
    axios.get(url)
    .then(res =>{
        return res.data
})
}
export default function page() {
    
  const {data, error }= useSWR( 
    "https://jsonplaceholder.typicode.com/users", getData 
  )     
  if (error) return <div> qua trinh lay du lieu that bai </div>
  if (!data ) return <div> dang tai du lieu ... </div>
    return (
    <div>
      fwtch data voi thu vien swr 
      { data.map((item : any )=> {
        return <div key={item.id}>{item.name}</div>  // in du lieu ra giao dien
      })}
    </div>
  )
}
