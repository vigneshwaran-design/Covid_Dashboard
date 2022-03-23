import { React, useState } from "react";
// import { Container,Nav,Navbar}  from 'react-bootstrap'
import "../css/page2.css";
import { useLocation, Link } from "react-router-dom";

const Search = () => {
  const { state } = useLocation();
  const [data, setData] = useState(state);
  const [info, setInfo] = useState(state);

  const filter = (e) => {
    let s = [];

    if (e.target.value !== "") {
      s = data.filter((emp) => {
        return emp.Country.toLowerCase().match(e.target.value.toLowerCase());
      });
      setData(s);
    } else {
      setData(info);
    }
  };

  return (
    <>
      <div className="main">
        <div className="box">
          <div className="content">
            <h2 style={{fontFamily: "Gill Sans Extrabold"}}>Select a Country</h2>
            <input type="text" className="" onChange={filter} placeholder="Select a Country" />
            <span style={{FontWeight: "bold"}}>Suggestions</span>
            <br />
            <div className="scroll-container">
              {data.map((data,index) =>{
              return(
                <Link to={"/display"} key={index} state={data} className="link">
                  <div className="scroll-page">
                    <p>{data.Country}</p></div>
                </Link>
              )}
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

