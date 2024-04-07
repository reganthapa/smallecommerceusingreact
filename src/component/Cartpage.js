import React from 'react'
import { Mainlayout } from './Mainlayout'
import { Usecart } from '../Context/Cartcontext'


 const Cartpage = () => {
  const {cartlist , removefromcart , total}=Usecart()
  console.log(total)



  const handledRemovefromcart = (product) => {
    removefromcart(product);
  };
  console.log("cartlist",cartlist)


  return (
    <> 

    <Mainlayout>
        <h1>This is Cartpage</h1>
        <p>${total}</p>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">NO.</th>
      <th scope="col">Name</th>
      <th scope="col">price</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
  {
          cartlist && cartlist.map((item , index ) => (
            <tr key = {index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td> <button className='btn btn-danger' onClick={() => handledRemovefromcart(item)} >delete</button>  </td>
          </tr>
          ))
        }

    </tbody>

    </table>


  





    </Mainlayout>
    </>
  )
}

export default Cartpage