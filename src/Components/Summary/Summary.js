import React from "react";
import { useNavigate } from "react-router-dom";
import "./Summary.css";
const Summary = (props) => {
  var Name = props.pushData1.Name;
  var Email = props.pushData1.Email;
  var Phone = props.pushData1.Phone;

  var Type = props.pushData2.Type;
  var Total = props.pushData2.Total;

  console.log("Summary_name", Name);

  const navigate = useNavigate();

  return (
    <div class="container">
      <div class="row">
        <div class="col-4 SideBar ">
          <div class="container sidebar-container">
            <div class="row sidebar-row">
              <div class="col-6 " style={{ width: "5rem" }}>
                <button
                  type="button"
                  class="btn btn-outline-info  sidebar-btn "
                >
                  1
                </button>
              </div>
              <div class="col-6">
                <h6 class="sidebar-h6">STEP 1</h6>
                <h5 class="step"> YOUR INFO</h5>
              </div>
            </div>

            <div class="row sidebar-row">
              <div class="col-6" style={{ width: "5rem" }}>
                <button type="button" class="btn btn-outline-info sidebar-btn ">
                  2
                </button>
              </div>
              <div class="col-6">
                <h6 class="sidebar-h6">STEP 2</h6>
                <h5 class="step"> SELECT PLAN</h5>
              </div>
            </div>

            <div class="row sidebar-row">
              <div class="col-6" style={{ width: "5rem" }}>
                <button type="button" class="btn btn-info sidebar-btn ">
                  3
                </button>
              </div>
              <div class="col-6">
                <h6 class="sidebar-h6">STEP 3</h6>
                <h5 class="step"> SUMMARY</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <h1 class="summary-h1">Summary</h1>
          <div class="main-card">
            <div class="card">
              <div class="card-body">Name : {Name}</div>
            </div>
            <div class="card">
              <div class="card-body">Email: {Email}</div>
            </div>
            <div class="card">
              <div class="card-body">Phone: +91 {Phone}</div>
            </div>
            <div class="card">
              <div class="card-body">Plan: {Type}</div>
            </div>
            <div class="card">
              <div class="card-body">Total: {Total}</div>
            </div>
            <hr />
            <div class="card">
              <div class="card-body">GrandTotal: {Total}</div>
            </div>
          </div>

          <div class="row row-1">
            <div class="col-sm">
              <h5
                onClick={() => {
                  navigate(-1);
                }}
              >
                Go Back{" "}
              </h5>
            </div>

            <div class="col-sm">
              <button class="bn54">
                <span class="bn54span">Pay Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
