import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './component/Homepage'
import Cartpage from './component/Cartpage'
import Productdetail from './component/Productdetail'

 const Myroute = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cartpage/>}/>
        <Route path='/product-detail/:id' element  ={<Productdetail/>}/>        
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default Myroute;