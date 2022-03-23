import {React,useEffect,useState} from "react";
import {  Container } from "reactstrap";
import {useLocation} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios"
import "../css/page3.css";

const columns = [
  { dataField: "Country", text: "Country",sort:true},
  { dataField: "ThreeLetterSymbol", text: "ISO CODE",sort:true },
  { dataField: "Population", text: "Population",sort:true },
  { dataField: "TotalTests", text: "TotalTests",sort:true },
  { dataField: "TotalCases", text: "TotalCases",sort:true },
  { dataField: "ActiveCases", text: "ActiveCase" ,sort:true},
  { dataField: "TotalRecovered", text: "Recovered" ,sort:true},
  { dataField: "TotalDeaths", text: "Deaths",sort:true },
];
const Global = () => {

  const {state} = useLocation();


  return (
    <div className="cover"> 
      <Container>
        <h1 className="info">Infection Information</h1>
        <BootstrapTable  className="table table-responsive-sm" 
          keyField="id"
          pagination={paginationFactory()}
          data={state}
          columns={columns}
         
        />
      </Container>
    </div>
  );
};

export default Global;
