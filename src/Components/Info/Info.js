import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Info.css";

const Info = (props) => {
  const navigate = useNavigate();

  function next(e) {
    navigate("./Plan");
    e.preventDefault();
    props.pullData({
      Name: name,
      Email: email,
      Phone: phone,
    });
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function nameChange(e) {
    setName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function phoneChange(e) {
    setPhone(e.target.value);
  }

  console.log("infoname", name);
  console.log("infoemail", email);
  console.log("infophone", phone);

  return (
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="container sidebar-container">
            <div class="row sidebar-row">
              <div class="col-6 " style={{ width: "5rem" }}>
                <button type="button" class="btn btn-info  sidebar-btn ">
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
          <form>
            <h1>Your Information</h1>
            <div class="form-group">
              <label for="formGroupExampleInput" class="label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                onChange={nameChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2" class="label">
                Email
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                onChange={emailChange}
                placeholder="Enter Your Email"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2" class="label">
                Phone
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                onChange={phoneChange}
                placeholder="Enter Your Mobile No"
              />
            </div>
          </form>
          <div class="row row-1">
            <div class="col-sm">
              <h5>Go Back </h5>
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

export default Info;
