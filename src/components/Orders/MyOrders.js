import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "../../url";
import LoggedNav from "../navbar/LoggedNav";
import Sidebar from "../Sidebar";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  console.log("USER ID: ", localStorage.getItem("userId"));
  useEffect(() => {
    axios
      .get(`${url}/order/getOrderById`, {
        params: { userId: localStorage.getItem("userId") },
      })
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(orders);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <LoggedNav />

      <h1>My Orders</h1>
      <div>
        {orders.map((order) => (
          <div>
            <strong>ID</strong>
            {order._id}
            <strong>Date</strong>
            {order.orderDate}
            <strong>Address</strong>
            {order.donator.address.city}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
