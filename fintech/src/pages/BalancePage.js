import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import HeaderWhite from "../components/HeaderWhite";
import BalanceCard from "../components/Balance/BalanceCard";
import TransactionList from "../components/Balance/TransactionList.js";

const BalancePage = () => {
  console.log(useLocation());
  useEffect(() => {
    getUserBalance();
  }, []);
  useEffect(() => {
    getTransList();
  }, []);

  const { fintechUseNo } = queryString.parse(useLocation().search);
  const [balance, setbalance] = useState("");

  const [transList,setTransList] = useState([]);
  console.log(fintechUseNo);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202200359U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };

  const getUserBalance = () => {
    //   request 생성 / 응답을 text 출력
    const accessToken = localStorage.getItem("accessToken");
    const sendData = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNo,
      tran_dtime: "20220224154030",
    };

    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData, //object
    };

    axios(option).then(({ data }) => {
      console.log(data);
      setbalance(data);
    });
  };

  const getTransList = () => {
    const accessToken = localStorage.getItem("accessToken");

    const sendData = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNo,
      inquiry_type: "A",
      inquiry_base : "D",
      from_date : "20220220",
      to_date : "20220225",
      sort_order : "D",
      tran_dtime : "20220225102830",
    };

    const option = {
      method: "GET",
      url: "/v2.0/account/transaction_list/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData, //object
    };

    axios(option).then(({ data }) => {
      console.log("TransList is : ", data.res_list);
      setTransList(data.res_list);
      console.log("new TransList : ", transList)
    });
  }

  return (
    <div>
      <HeaderWhite title="잔액조회"></HeaderWhite>
      <BalanceCard
        bankName={balance.bank_name}
        fintechNo={balance.fintech_use_num}
        balance={balance.balance_amt}
      ></BalanceCard>
      <TransactionList transactionList={transList}></TransactionList>
    </div>
    
  );
};

export default BalancePage;
