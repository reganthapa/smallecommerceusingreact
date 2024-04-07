import React, { useState } from 'react'
import { Mainlayout } from './Mainlayout'
import { myarrdata } from '../Myarrdata';
import { Link } from 'react-router-dom';
import { Usecart } from '../Context/Cartcontext';

const Homepage = () => {

  // const {cartlist} = Usecart();
  // console.log(cartlist)


let [product,setproduct] = useState(myarrdata);
const [selectedCategory, setSelectedCategory] = useState('myarrdata');

console.log(product)


  return (
    <>

 



    <Mainlayout>



      <h1> This is product </h1>

   <div className="row">
    { product && product.map((e,idx)=>(
      <div key={idx} className='col-md-3'>
        <div className="card">
        <img src={e.image}/>
        <h3>{e.name}</h3>
        <h4>{e.price}</h4>
        <p ><span className='bg-warning'>{e.category}</span></p>
        </div>
       
       
       
      <Link to={`/product-detail/${e.id}`} className='btn btn-primary'  >Click me</Link>
      </div>


    ))}
   </div>
    </Mainlayout>
    </>
  )
}
export default Homepage