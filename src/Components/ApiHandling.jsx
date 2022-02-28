import React, { useState, useEffect } from "react";
import "../css/ApiHandling.css";
import { jsonObj } from "./Api";

const ApiHandling = () => {
  const [apiData, setApiData] = useState([]);

  const getApi = async () => {
    // const jsonApi = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await jsonApi.json();
    setApiData(jsonObj);
  };

  useEffect(() => {
    getApi();
  });

  return (
    <>
      <div className="wrapper">
        <div className="main-header">
          <h1>This is a Header</h1>
        </div>
        <div className="main-body">
          {apiData.map((data) => {
            return (
              <div className="card">
                <div className="card-image">
                  <img src={data.imageUrl} alt="" />
                </div>
                <div className="card-data">
                  <h3 className="card-title">{data.name}</h3>
                  <div className="card-description">
                    <div className="card-email">Email: {data.email}</div>
                    <div className="card-company">
                      Works at {data.company.name}
                    </div>
                  </div>
                  <div className="card-ctas">
                    <button className="btn cta-follow">Follow them</button>
                    <button className="btn cta-favourite">Add to fav's</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ApiHandling;
