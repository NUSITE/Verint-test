import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { OrderDetails } from "../Interfaces";
import CardComponent from "./CardComponent";

function OrdersComponent() {
  const location = useLocation();
  const storeItemData = location.state;
  const [orderDetails, setOrderDetails] = useState<OrderDetails>();
  const [nameError, setNameError] = useState<string>("please provide name");
  const [emailError, setEmailError] = useState<string>("please provide mail");
  const [mobileError, setMobileError] = useState<string>("please provide mobile");
  const [cardError, setCardError] = useState<string>("please provide card");
  const [addressError, setAddressError] = useState<string>("please provide address");
  useEffect(() => {
    let order: OrderDetails = {
      orderId: 0,
      orderedItem: undefined,
      userDetails: {},
    };
    order.orderId = Math.floor(Math.random() * (1000 - 0) + 1);
    order.orderedItem = storeItemData;
    setOrderDetails(order);
  }, []);

  const onInputChange = (value: string, key: string, expr: RegExp) => {
    if (!expr.test(value)) {
      if (key === "fullName") setNameError("Invalid Name");
      else if (key === "email") setEmailError("Invalid Email");
      else if (key === "mobile") setMobileError("Invalid Mobile Number");
      else if (key === "creditCard") setCardError("Invalid Card number");
      else setAddressError("Invalid Address")
      return;
    }
    if (key === "fullName") setNameError("");
    else if (key === "email") setEmailError("");
    else if (key === "mobile") setMobileError("");
    else if (key === "creditCard") setCardError("");
    else setAddressError("")
    let order = { ...orderDetails };
    let userDetails = { ...order.userDetails };
    userDetails[key] = value;
    order.userDetails = { ...userDetails };
    setOrderDetails(order as OrderDetails);
  };

  return (
    <div className="orders-page">
      <div className="user-details">
        <h3>Please provide necssary details to proceed</h3>
        <div className="input-box">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Please provide your name"
            onChange={(event) =>
              onInputChange(
                event.target.value,
                "fullName",
                /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/
              )
            }
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            placeholder="Please provide your email"
            onChange={(event) =>
              onInputChange(
                event.target.value,
                "email",
                /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
              )
            }
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            placeholder="Please provide your adress"
            onChange={(event) =>
              onInputChange(
                event.target.value,
                "address",
                /^[a-zA-Z0-9./_-]+(?:-[a-zA-Z]+)*$/
              )
            }
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="Mobile">Mobile number</label>
          <input
            type="number"
            placeholder="Please provide your mobile number"
            onChange={(event) =>
              onInputChange(
                event.target.value,
                "mobile",
                /^(\d{10})$/
              )
            }
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="Credit">Credit Card number</label>
          <input
            type="number"
            placeholder="Please provide your credit card"
            onChange={(event) =>
              onInputChange(event.target.value, "creditCard", /^(\d{19})$/)
            }
            required
          />
        </div>
        <div className="errors">
            <ul>
                {nameError && <li>{nameError}</li>}
                {emailError && <li>{emailError}</li>}
                {mobileError && <li>{mobileError}</li>}
                {cardError && <li>{cardError}</li>}
                {addressError && <li>{addressError}</li>}
            </ul>
        </div>
        <div className="place-order">
          {!mobileError && !nameError && !cardError && !emailError && !addressError && <Link to="/confirm-order" className="primary-button" state={orderDetails}>
            Confirm Details
          </Link>}
        </div>
      </div>
      <div className="order-details">
        <h3>Order details</h3>
        <CardComponent item={storeItemData} />
      </div>
    </div>
  );
}

export default OrdersComponent;
