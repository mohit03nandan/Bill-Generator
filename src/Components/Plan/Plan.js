import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Plan.css";

const Plan = (props) => {
  const navigate = useNavigate();

  function next() {
    navigate("./Summary");
  }

  const [type1, setType1] = useState("Arcade");
  const [total1, setTotal1] = useState("$9");

  const [type2, setType2] = useState("Advanced");
  const [total2, setTotal2] = useState("$12");

  const [type3, setType3] = useState("Pro");
  const [total3, setTotal3] = useState("$15");

  function Planning1(e) {
    e.preventDefault();
    setType1("Arcade");
    setTotal1("$9");

    console.log("hello");

    props.pullData({
      Type: type1,
      Total: total1,
    });
  }

  function Planning2(e) {
    e.preventDefault();
    setType2("Advanced");
    setTotal2("$12");

    console.log("hello");

    props.pullData({
      Type: type2,
      Total: total2,
    });
  }
  function Planning3(e) {
    e.preventDefault();
    setType3("Advanced");
    setTotal3("$15");

    console.log("hello");

    props.pullData({
      Type: type3,
      Total: total3,
    });
  }

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
                <button type="button" class="btn btn-info sidebar-btn ">
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
                <button type="button" class="btn btn-outline-info sidebar-btn ">
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
          <h1>Select Your Plan</h1>
          <h5>You have the option option of monthly or yearly billing</h5>
          <div class="container ">
            <div class="row ">
              <div class="col-4 price price-1" onClick={Planning1}>
                <button
                  type="button"
                  class="btn btn-dark price-button"
                  style={{ background: "#A1572C" }}
                >
                  <i class="fa fa-car"></i>
                </button>
                <h4>Arcade</h4>
                <h6>$9/month</h6>
              </div>
              <div class="col-4 price" onClick={Planning2}>
                <button
                  type="button"
                  class="btn btn-dark price-button "
                  style={{ background: "#8D3C41" }}
                >
                  <i class="fa fa-credit-card-alt"></i>
                </button>
                <h4>Advanced</h4>
                <h6>$12/month</h6>
              </div>
              <div class="col-4 price" onClick={Planning3}>
                <button
                  type="button"
                  class="btn btn-dark price-button"
                  style={{ background: "#1F1D7F" }}
                >
                  <i class="fa fa-database"></i>
                </button>
                <h4>Pro</h4>
                <h6>$15/month</h6>
              </div>
            </div>
            <div class=" toogle">
              <div class="row">
                <div class="col-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      <h2>monthly</h2>
                    </label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      <h2 class="yearly">yearly</h2>
                    </label>
                  </div>
                </div>
              </div>
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
              <button class="bn54" onClick={next}>
                <span class="bn54span">Next Step</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
