import React from "react";
import "../css/display.css";
import Chart from "react-apexcharts"
import { useLocation } from "react-router-dom";
const Display = () => {
  const { state } = useLocation();
  const options = {
    labels: ["TotalCases", "ActiveCases", "TotalRecovered","TotalDeaths"],
    color:["blue","Yellow","Green","red"],
    legend: {
      labels: {
      fontColor: "white",
      fontSize: 18
  }},
    plotoptions: {
      pie: {
       donut:{
         size:"50px"
       }
                 
                                   
    }},
  //   legend: {
  //     labels: {
  //     fontColor: "white",
  //     fontSize: 18
  // }}
  };
  const series=[state.TotalCases,state.ActiveCases ,state.TotalRecovered,state.TotalDeaths]
  return (
   <div className="backimage">
    <div className="center3">
      <div className="MainBox">
        <div className="confirmed1" style={{backgroundColor:"#689bed"}}>
          <p
            style={{
              color: "blue",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Serif",
              
            }}
          >
            Confirmed Cases
          </p>
          <p style={{ fontSize: "30px" }}>{state.TotalCases}</p>
        </div>
        <div className="active1" style={{backgroundColor:"#f0e692"}}>
          <p
            style={{
              color: "#d4be00",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Serif",
            }}
          >
            Active Cases
          </p>
          <p style={{ fontSize: "30px" }}> {state.ActiveCases}</p>
        </div>
        <div className="recovered1" style={{backgroundColor:"#85ed98"}}>
          <p
            style={{
              color: "green",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Serif",
            }}
          >
            Recovered Cases
          </p>
          <p style={{ fontSize: "30px" }}>{state.TotalRecovered}</p>
        </div>
        <div className="death1" style={{ backgroundColor:"#f77d6a"}}>
          <p
            style={{
              color: "red",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Serif",
            }}
          >
            Death
          </p>
          <p style={{ fontSize: "30px" }}>{state.TotalDeaths}</p>
        </div>
      </div>
      <div className="chart" style={{width: "35%", height: "30px",marginLeft:"10%"}}>
        <Chart
          options={options}
          series={series}
          type="donut"
          width="100%"
         
        />
      </div>
    </div>
    </div>
    
  );
};

export default Display;
