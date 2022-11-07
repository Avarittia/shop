import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToCart = (e, prodID, priceID) => {
  e.preventDefault();
  const myToast = (msg, type) => {
    toast[type](msg, {
      position: "top-center",
    });
  };
  const token = JSON.parse(window.localStorage.getItem("user"));

  if (token) {
    const addCart = async () => {
      const mydata = await fetch(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Warehouse-Id": "1",
            "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            productId: prodID,
            priceId: priceID,
            quantity: "1",
            note: "New Item",
          }),
        }
      );
      const res = await mydata.json();
      if (mydata.status === 200) {
        myToast("Added to cart", "success");
        // console.log(res);
      } else {
        // console.log(res);
        myToast("Product out of stock", "warning")
   
      }
    };
    addCart();
  } else {
    window.location = "/login";
  }
};
