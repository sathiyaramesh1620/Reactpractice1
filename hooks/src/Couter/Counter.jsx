import React from 'react'
import { useState } from 'react'

const Counter = () => {
   let[product,setProduct]= useState({
        pro_Name:" Iphone12",
        image:"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
        price:"10000",
        qty:"1",
        Total:""

    })
    let incrHandler=()=>{
        setProduct({...product,qty:product.qty+1})
    }
    let decrHandler=()=>{
        setProduct({...product,qty:product.qty-1})
    }
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col">
                <table className='table table-hover'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>ProName</th>
                            <th>Image</th>
                            <th>price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.pro_Name}</td>
                            <td><img src={product.image} height="75px"></img></td>
                            <td>{product.price}</td>
                            <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                            <td>{product.qty*product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Counter