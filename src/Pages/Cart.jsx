import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaHome, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const myToast = (msg, type) => {
    toast[type](msg, {
      position: "top-center",
    });
  };
  const token = JSON.parse(window.localStorage.getItem("user"));
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (token) {
      fetchCart();
    } else {
      window.location = "/login";
    }
  }, [token]);

  const fetchCart = async () => {
    const res = await fetch(
      "https://uat.ordering-farmshop.ekbana.net/api/v4/cart",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "Warehouse-Id": "1",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await res.json();
    setItems(data.data.cartProducts);

    setData(data.data);
    // console.log(data.data);
  };
  // console.log(items);

  const increment = async (e, productID, qty) => {
    const res = await fetch(
      `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${productID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "Warehouse-Id": "1",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          quantity: qty + 1,
        }),
      }
    );
    const data = await res.json();
    // console.log(data);
    if (res.status === 200) {
      fetchCart();
      // myToast("Quantity Increased", "success")
    }
    // else {
    //   console.log(data);
    // }
  };

  const deleteFromCart = async (e, productID) => {
    e.preventDefault();
    const res = await fetch(
      `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${productID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "Warehouse-Id": "1",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.status === 204) {
      fetchCart();
    }
  };

  const decrement = async (e, productID, qty) => {
    e.preventDefault();
    if (qty === 1) {
      deleteFromCart(e, productID);
    } else {
      const res = await fetch(
        `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${productID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            quantity: qty - 1,
          }),
        }
      );

      if (res.status === 200) {
        fetchCart();
      }
    }
  };
  const checkout = () => {
    myToast("Checkout Successful", "success");
    setTimeout(() => {
      window.location = "/";
    }, 2500);
  };

  // if (loading) {
  //   return (
  //     <div className="parent">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  return (
    <Container fluid className="px-0">
      <Container
        fluid
        className="py-4 px-0"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Container className="">
          <Link
            style={{
              fontSize: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
              color: "#3399cc",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>
              <FaHome />
            </span>{" "}
            <span className="px-1 pt-1">Home</span>
          </Link>
          {"/"}
          <span className="px-2" style={{ fontSize: "1rem" }}>
            Cart
          </span>
        </Container>
      </Container>
      <Container>
        <div>
          <h2 className="text-center py-3">
            you have {items.length} unique items in your cart
          </h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((items) => {
                return (
                  <tr key={items.id}>
                    <td className="d-flex justify-content-start align-items-center table-data">
                      <div>
                        <img
                          src={items.product.images[0].imageName}
                          alt="."
                          width={"100px"}
                          height={"100px"}
                        />
                      </div>
                      <small style={{ fontWeight: "500" }} className="px-5">
                        {" "}
                        {items.product.title}
                      </small>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center table-data">
                        <Button
                          onClick={(e) =>
                            decrement(e, items.id, items.quantity)
                          }
                          style={{
                            backgroundColor: "#fe9126",
                            border: "none",
                            borderRadius: "0",
                          }}
                        >
                          <FaMinus />
                        </Button>
                        <div
                          className="pt-3 px-3"
                          style={{ fontWeight: "bold" }}
                        >
                          {items.quantity}
                        </div>
                        <Button
                          onClick={(e) =>
                            increment(e, items.id, items.quantity)
                          }
                          style={{
                            backgroundColor: "#fe9126",
                            border: "none",
                            borderRadius: "0",
                          }}
                        >
                          <FaPlus />
                        </Button>
                      </div>
                    </td>
                    <td>
                      <div className="text-center py-3 ms-3">{items.price}</div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center table-data">
                        <Button
                          onClick={(e) => deleteFromCart(e, items.id)}
                          style={{
                            backgroundColor: "#fe9126",
                            border: "none",
                            borderRadius: "0",
                          }}
                        >
                          <FaTrash /> Remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong>Total: </strong>
              <strong>$ {data.total}</strong>
            </div>
            <Button
              onClick={checkout}
              style={{
                backgroundColor: "#fe9126",
                border: "none",
                borderRadius: "0",
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={1500} />
    </Container>
  );
};

export default Cart;
