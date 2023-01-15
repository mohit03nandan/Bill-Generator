import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Info from "./Info/Info";
import Plan from "./Plan/Plan";
import Summary from "./Summary/Summary";

import "./App.css";
const App = () => {
  const [DataInfo, setDataInfo] = useState("");

  const [DataPlan, setDataPlan] = useState("");
  console.log("DataInfo", DataInfo);
  console.log("DataPlan", DataPlan);

  return (
    <div class="row">
      <div class="col-12">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Info pullData={setDataInfo} />} />
            <Route path="Plan" element={<Plan pullData={setDataPlan} />} />
            <Route
              path="Plan/Summary"
              element={<Summary pushData1={DataInfo} pushData2={DataPlan} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
