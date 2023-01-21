import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import url from "../../url";
import LoggedNav from "../navbar/LoggedNav";
import Sidebar from "../Sidebar";

function MyListings() {
  const [orders, setOrders] = useState([]);
  console.log("USER ID: ", localStorage.getItem("userId"));
  useEffect(() => {
    axios
      .get(`${url}/product/myproducts`, {
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
            <th>Product Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.name}</td>
              <td>{order.timestamp}</td>
              <td>{order.city} </td>
              <td>${order.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyListings;
