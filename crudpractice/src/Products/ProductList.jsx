import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
const ProductList = () => {
    let[products,setProducts]=useState({})
    let[errmessage,setErrMessage]=useState("")
    useEffect(()=>{
        let url=` https://jsonplaceholder.typicode.com/users `
Axios.get(url).
then((response)=>{ 
    console.log("123")
    setProducts(response.data)
})
.catch((err)=>{ 
  setErrMessage(err)
})
    })
  return (
    <div className='container'>
      <pre>{JSON.stringify(products)}</pre>
      <h1>Product data</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis, eum culpa aliquam, blanditiis cumque recusandae dolorem obcaecati dolores ab dolor voluptas! Obcaecati numquam tempore nostrum quis repudiandae sed qui.</p>
<div className="row">
  {
    products.length>0?<>
    {
      products.map((product)=>{
        return <div className="col">
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              <ul className='list-group'>
                <li className='list-group-item'>{product.name}</li>
              </ul>
            </div>
          </div>
        </div>
      })
    }
    
    </>:<><h1>No data</h1></>
  }
</div>
      </div>
  )
}

export default ProductList