import React from "react";

import Image from "../../components/common/image";

// Import Images

// Order ID #51240
import pro25 from "../images/electronics/product/25.jpg";
import pro13 from "../images/electronics/product/13.jpg";
import pro16 from "../images/electronics/product/16.jpg";

// Order ID #51241
import pro12 from "../images/electronics/product/12.jpg";
import pro3 from "../images/electronics/product/3.jpg";

import pro14 from "../images/electronics/product/14.jpg";

import pro6 from "../images/electronics/product/6.jpg";
import furniture8 from "../images/furniture/8.jpg";

import jwel18 from "../images/jewellery/pro/18.jpg";
import fashion06 from "../images/fashion/pro/06.jpg";

import pro19 from "../images/electronics/product/19.jpg";
import pro20 from "../images/electronics/product/20.jpg";
import pro23 from "../images/electronics/product/23.jpg";
import pro24 from "../images/electronics/product/24.jpg";
import pro21 from "../images/electronics/product/21.jpg";
import pro8 from "../images/electronics/product/8.jpg";
import pro18 from "../images/electronics/product/18.jpg";
import pro17 from "../images/electronics/product/17.jpg";
import fashion19 from "../images/fashion/product/19.jpg";
import fashion14 from "../images/fashion/product/14.jpg";

import furniture6 from "../images/furniture/6.jpg";
import furniture4 from "../images/furniture/product/4.jpg";
import furniture7 from "../images/furniture/7.jpg";
import furniture16 from "../images/furniture/product/16.jpg";

const data = [
  {
    oder_id: "#51240",
    status: <span className="badge badge-secondary">Cash On Delivery</span>,
    payment_method: "Visa",
    order_status: <span className="badge badge-success">Delivery</span>,
    date: "Dec 10,18",
    total: "$54671",
  },
  {
    oder_id: "#51245",
    status: <span className="badge badge-success">Paid</span>,
    payment_method: "Paypal",
    order_status: <span className="badge badge-success">Delivery</span>,
    date: "Jan 14,18",
    total: "$6791",
  },
  {
    oder_id: "#51245",
    status: (
      <span className="badge badge-warning">Awaiting Authentication</span>
    ),
    payment_method: "Debit Card",
    order_status: <span className="badge badge-warning">Processing</span>,
    date: "Mar 27,18",
    total: "$8791",
  },
];

export default data;
