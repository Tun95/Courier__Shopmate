import React from "react";
import "./styles.scss";
import TrackTable from "./Table";

function Track() {
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
