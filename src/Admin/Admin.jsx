import React from 'react'

const menu = [
    {name:"Dashboard", path:"/admin"},
    {name:"Products", path:"/admin/products"},
    {name:"Customers", path:"/admin/customers"},
    {name:"Orders", path:"/admin/orders"},
    {name:"AddProduct", path:"/admin/product/create"},
    {name:"", path:" "},
]

const Admin = () => {
  return (
    <div>Admin</div>
  )
}

export default Admin