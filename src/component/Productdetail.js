import React, { useEffect, useState } from 'react'
import { Mainlayout } from '../component/Mainlayout'
import { useParams } from 'react-router-dom';
import { myarrdata } from '../Myarrdata';
import { Usecart } from '../Context/Cartcontext'



const ProductDetail = () => {
  const {id} = useParams()
  const [cart, setCart] = useState([]); 
  
  
  const {addtocart,cartlist, removefromcart}=Usecart()
console.log("cart",cartlist)
  
   

  const [prod, setprod]=useState(null)
  console.log(id)
  useEffect(()=>{
   let filterdata= myarrdata.filter((data)=>data.id==id)
   setprod(filterdata[0])
  },[id])


  return (
    <>
    
    <Mainlayout>
            {
              prod &&
              <div className='card p-3'>
                 <h2  className='text-warning text-center mb-3'>{prod.name}</h2>
                <img src={prod.imagelink} height={550} width={400}/>

                <p>
                  <b>{prod.description}</b>
                </p>

                <b style={{color: "red"}}>
                  Category: {prod.category} 
                </b>

                <b style={{color:"green"}}>Price: ${prod.price}</b>

                <div className='offset-3'>
                <button className='btn btn-success' onClick={() => addtocart(prod)}>Add to Cart</button>
                </div>
                  
                <div className="remove">
                  <button className='btn btn-danger' onClick={() => removefromcart(prod)}>Remove</button>
                </div>

                
                
              </div>
            }

            </Mainlayout>
    </>
  )
}

export default ProductDetail;
