import React from 'react'
import {Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Main from './Components/Main';
import Products from './Components/Products';
import CarProducts from './Components/CarProducts';
import BikeProducts from './Components/BikeProducts';
import PlanProducts from './Components/PlanProducts';
import Services from './Components/Services';

function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="main" element={<Main/>}>
      <Route path="services" element={<Services/>}/>
        <Route path="products" element={<Products/>}>
          <Route path="car" element={<CarProducts/>}/>
          <Route path="bike" element={<BikeProducts/>}/>
          <Route path="plan" element={<PlanProducts/>}/>
       
        </Route>
        
      </Route>
        
         
     </Routes>
    
    </div>
  )
}

export default App