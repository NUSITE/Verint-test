import React from "react";
import { Link, useLocation } from "react-router-dom";
import CardComponent from "./CardComponent";

function ConfirmOrderComponent() {
  let location = useLocation();
  let orderDetails = location.state;
  console.log("Order Details", orderDetails);
  return (
    <div className="order-summary">
        <h3>Order Summary</h3>
        <CardComponent item={orderDetails.orderedItem} />
        <div className="user-summary">
            <h4>Order Id: {orderDetails.orderId}</h4>
            <p>Order purchased by {orderDetails.userDetails.fullName} via credit card with number {orderDetails.userDetails.creditCard} to the address {orderDetails.userDetails.address}</p>
            <p>Please verify your contact details</p>
            <p>
                mobile number: {orderDetails.userDetails.mobile}
            </p>
            <p>
                Email: {orderDetails.userDetails.email}
            </p>
        </div>
        <div>
            <Link to="/" className="primary-button">Back to Home Page</Link>
        </div>
    </div>
  );
}

export default ConfirmOrderComponent;
