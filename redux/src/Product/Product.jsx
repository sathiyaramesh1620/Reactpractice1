import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../redux/product/product.action'

const Product = () => {
  let dispatch = useDispatch();
  let product = useSelector((state) => {
    return state.product
  })
  let decrHandler = () => {
    dispatch(decrAction())
  }
  let incrHandler = () => {
    dispatch(incrAction())
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <table className='table table-hover'>
              <thead className='bg-dark text-white'>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Qty</th>

                  <th>Total</th>


                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.name}</td>
                  <td><img src={product.image} height="100px" /> </td>
                  <td>{product.price}</td>
                  <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>

                  <td>{product.price * product.qty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Product
