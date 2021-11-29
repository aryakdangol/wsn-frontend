import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Donar Location</th>
            <th>Payment(USD)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.productName}</td>
              <td>{order.orderDate}</td>
              <td>{order.donator.address.city} </td>
              <td>${order.payment.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyOrders;
