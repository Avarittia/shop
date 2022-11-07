// import { createContext, useReducer, useEffect } from "react";

// export const cartContext = createContext({});

// export const CartContextProvider = ({ children }) => {
  
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD":
//         const temporaryCart = state.filter(
//           (items) => action.payload.id === items.id
//         );
//         if (temporaryCart.length > 0) {
//           return state;
//         } else {
//           return [...state, action.payload];
//         }
//       case "INCREASE":
//         const increment = state.map((items) => {
//           if (items.id === action.payload.id) {
//             return {
              
//               ...items,
//               quantity: items.quantity + 1,
              
//             };
//           } else {
//             return items;
//           }
//         });
//         console.log(increment)
//         return increment;
      

//       case "DECREASE":
//         const decrement = state.map((items) => {
//           if (items.id === action.payload.id) {
//             return {
//               ...items,
//               quantity: items.quantity - 1,
//             };
//           } else {
//             return items;
//           }
//         });
//         return decrement;
//       case "REMOVECART":
//         const removeCart = state.filter(
//           (items) => items.id !== action.payload.id
//         );
//         return removeCart;

//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, [], () => {
//      
//     return localCart ? JSON.parse(localCart) : [];
//   });
//   useEffect(() => {
//     localStorage.setItem("Cart", JSON.stringify(state));
//   }, [state]);

//   const cart = { state, dispatch };
//   return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
// };
