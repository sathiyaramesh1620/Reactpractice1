import React, { useRef } from 'react'
import image from '../asset/three.jpeg'
const UseRef = () => {
    let imageEl=useRef(null)
    let ClickHandler=()=>{
console.log(imageEl.current)
    }
  return (
    <div>
        <img src={image}  alt="no"  height="50px"ref={imageEl}/>
        <button onClick={ClickHandler} >Click</button>
    </div>
  )
}

export default UseRef