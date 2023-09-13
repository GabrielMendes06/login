import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import HeaderStatement from "../components/Statement/HeaderStatement";
import Coin from "../images/cifrao.png";
import Input from "../components/Input";

function Statement() {

  const [statementList, setStatementList] = useState([]);
  const [filterType, setFilterType] = useState("all");

  const getStatementData = useCallback((ref) => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/statementdata/${ref}`
      )
      .then((response) => {
        console.log(response);
        const res = response.data.result;
        const extratosPositivos = res.filter(
          (extrato) => extrato.BalanceImpact === "positive"
        );
        const extratosNegativos = res.filter(
          (extrato) => extrato.BalanceImpact === "negative"
        );
        console.log(extratosPositivos);
        setStatementList(res.reverse());
      });
  }, []);

  useEffect(() => {
    let id = localStorage.getItem("userId");
    getStatementData(id);
    console.log(statementList);
  }, [getStatementData]);

  const filteredStatements = useMemo(() => {
    if (filterType === "positive") {
      return statementList.filter((extrato) => extrato.BalanceImpact === "positive");
    } else if (filterType === "negative") {
      return statementList.filter((extrato) => extrato.BalanceImpact === "negative");
    } else {
      return statementList;
    }
  }, [filterType, statementList]);

  return (
    <div className="container" id="exclusive-content-statement">
      <HeaderStatement
        onClick={() => {
          console.log("clicou");
        }}
        children1={
          <Input 
            type={"Submit"} 
            value={"All"} 
            className={"button-statement"} 
            onClick={() => setFilterType("all")}
          />
        }
        children2={
          <Input
            type={"Submit"}
            value={"Receipts"}
            className={"button-statement"}
            onClick={() => setFilterType("positive")}
          />
        }
        children3={
          <Input
            type={"Submit"}
            value={"Payments"}
            className={"button-statement"}
            onClick={() => setFilterType("negative")}
          />
        }
      />
      <div className="content-parent">
        {filteredStatements.map((statement, index) => (
          <ul className="container-list">
            <div>
              <img src={Coin} alt="" className="coin-img" />
            </div>
            <li key={index} className="list-flex">
              <div className="left-grid">
                <p className="list-type">{statement.typeTransiction}</p>
                <p
                  className="list-value"
                  style={{
                    color:
                      statement.BalanceImpact === "negative" ? "red" : "green",
                  }}
                >
                  {statement.BalanceImpact === "negative" ? "-" : "+"} R$
                  {statement.value}
                </p>
              </div>
              <div className="rigth-grid">
                <p className="list-date">
                  Date: {new Date(statement.dateTransiction).toLocaleString()}
                </p>
                <p className="list-balance">
                  Total balance: R${statement.balanceResult}
                </p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Statement;
