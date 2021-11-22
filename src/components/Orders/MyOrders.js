import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "../../url";

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
  return (
    <div>
      <h1>My Orders</h1>
      <div>
        {orders.map((order) => (
          <div>{order._id}</div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
