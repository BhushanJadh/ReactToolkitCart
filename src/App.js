
import React from 'react'
import {useDispatch} from 'react-redux'
import  "./App.css"
import Cart from './Cart'
import {ADD,REMOVE} from './ReduxToolkit/Slice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  const dispatch=useDispatch()

  return (
    <>
    <Cart/>
    <div  className="border d-flex align-items-center justify-content-center">
 
      <Card style={{ width: '30rem' }}>
      <div className="border d-flex align-items-center justify-content-center">
      <img className='image'  src="https://product-images.21run.com/product/d/3/c/6/d3c68ced3c261163939df036bb47af34b69cbf1f_nike_air_zoom_structure_21_heren_grijs_904695_005.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=265&w=265&s=00779ded22f605d721a250bdea721f7b" alt='' />
        </div>
      
      <Card.Body>
      <Button variant="danger">Bhushan Online Shopping</Button>
      <div className="border d-flex align-items-center justify-content-center">
        <Button variant="danger">Nike Shoes</Button>
        </div>
        <Card.Text>
        NIKE AIR ZOOM STRUCTURE 21 MENS VAST GREY BRIGHT CRIMSON ATMOSPHERE GREY | Grey Mens Supportive Running Shoes
          
        </Card.Text>
        <Card.Text>
        Price:5000 INR
        </Card.Text>

        <div className="border d-flex align-items-center justify-content-center">
        <Button variant="danger">Buy Now</Button>
        </div>
        
      </Card.Body>
      <div className="border d-flex align-items-center justify-content-center">
      <Button className='btn'  onClick={()=>{dispatch(ADD())}}  >ADD_PRODUCT</Button>
     <Button className='btn' onClick={()=>{dispatch(REMOVE())}}>REMOVE_PRODUCT</Button>
      </div>
   
    </Card>
    
  </div>
   
    
    </>
  )
}

export default App