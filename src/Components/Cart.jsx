// import React, { useContext, useEffect, useState } from "react";
// import { Button, Container, Stack } from "react-bootstrap";
// import { cartContext } from "../Context/CartContext";
// import { useAuthContext } from "../Context/useAuthContext";


// const Cart = () => {
 
//   const { user } = useAuthContext();

//   const Cart = useContext(cartContext);
//   const state = Cart.state;
//   const dispatch = Cart.dispatch;


  

//   return (
//     <div>
//       {state.map((items, idx) => {
//         return (
//           <Container className="p-5">
//             <Stack gap={3}>
//               {state.map((items) => {
//                 return <Container className="border d-flex justify-content-evenly align-items-center">
//                     <div>
//                       <img src={items.images[0].imageName} alt="/" width={"80px"} height={"80px"} />
//                     </div>
//                     <div>{items.title}</div>
//                     <div className="d-flex justify-content-evenly align-items-center">
//                     <Button onClick={()=>dispatch({type:"DECREASE", payload:items})}>-</Button>
//                     <div>{items.quantity}</div>
//                     <Button onClick={()=>dispatch({type:"INCREASE", payload:items})}>+</Button>
//                     </div>
//                     <div>
//                       <Button onClick={()=>dispatch({type:"REMOVECART", payload:items})}>Remove</Button>
//                     </div>
//                     <div>
//                       {items.length*items.unitPrice[0].sellingPrice}
//                     </div>
//                 </Container>;
//               })}
//             </Stack>
//           </Container>
//         );
//       })}
//     </div>
//   );
// };

// export default Cart;
