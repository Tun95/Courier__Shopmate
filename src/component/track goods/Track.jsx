import React from "react";
import "./styles.scss";
import TrackTable from "./Table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link } from "react-router-dom";

function Track() {
  const rows = [
    {
      id: 1,
      img: "/images/shops/shops-1.png",
      product: "Mapple Earphones",
      amount: "180",
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2,
      img: "/images/shops/shops-2.png",
      product: "Vivo android one",
      amount: "120",
      date: "1 Oct",
      customer: "John Smith",
      method: "Stripe",
      status: "Pending",
    },
  ];
  return (
    <div className="track container">
      <div className="table_box ">
        <form action="" className="table_content f_flex">
          <span className="table">
            <span className="table_header">
              <h3>Enter the Consignment No.</h3>
            </span>
            <div className="table_body">
              <div className="table_rows table_grid">
                <div className="table_data">
                  <input type="text" placeholder="Enter Tracking Number" />
                </div>
                <div className="table_data table_btn">
                  <span></span>
                  <button type="submit">Track Result</button>
                </div>
              </div>
              <div className="table_rows bottom">
                <div className="table_data">
                  <strong>Ex: 12345</strong>
                </div>
              </div>
            </div>
          </span>
        </form>
        <div className="shipping_content">
          <TrackTable />
        </div>
      </div>
    </div>
  );
}

export default Track;
