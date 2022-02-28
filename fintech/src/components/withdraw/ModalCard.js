import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import queryString from "query-string";


const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;



const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  // input data 받아온다음에 결제 버튼을 눌렀을때 axios 출금 이체를 바생시키기;

  const [withdrawResult, setWithdrawResult] = useState([]);
  const [amount, setamount] = useState("");
  const handleAmountChange = (e) => {
    const { value } = e.target;
    setamount(value);
  };
  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202200359U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };


  const handleWithdraw = () => {
    //axios call
    //출금 이체 API 요청 작성하기
    const sendData =  {
        "bank_tran_id": genTransId(),
        "cntr_account_type": "N",
        "cntr_account_num": "100000000001",
        "dps_print_content": "이용료",
        "fintech_use_num": "120220035988941008441112",
        "wd_print_content": "이용료",
        "tran_amt": "10000",
        "tran_dtime": "20220225102808",
        "req_client_name": "홍길동",
        "req_client_num": "H1234",
        "req_client_fintech_use_num": "120220035988941008441112",
        "transfer_purpose": "ST",
        "recv_client_name": "양태환",
        "recv_client_bank_code": "097",
        "recv_client_account_num": "100000000001"
    };

  const option = {
    method: "POST",
    url: "/v2.0/transfer/withdraw/fin_num",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    data: sendData, //object
  };

    axios(option)
      .then((resp) => {
        console.log("resp : ", resp)
        setWithdrawResult(resp.data)
        window.alert("출금이체 진행1")
        console.log("출금이체 진행1")
        if (resp.data.rsp_code === "A0000") {
          deposit()
        } else {
          console.log("rsp_code is not A000")
        }
        
      })
      .catch((err) => {
        console.error(err)
      })

  }

  // const get2LeggedToken = () => {
    
  //   const sendData = {
  //     "client_id":"9e2b2ee7-9f49-44f2-9a17-7b4b8244382d",
  //     "client_secret":"502a2130-d3b4-4938-9bdd-8b36a060dfb9",
  //     "scope":"oob",
  //     "grant_type":"client_credentials"
  //   }

  //   const encodedData = queryString.stringify(sendData);

  //   const option = {
  //     method: "POST",
  //     url: "/oauth/2.0/token",
  //     headers: {
  //       "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
  //     },
  //     data: encodedData, //object
  //   };

  //   axios(option).then((resp) => {
  //     console.log("2Legged Token resp : ", resp)
  //     window.alert("2legged Token issued")
  //     const twoLT = resp.data.access_token
  //     setTwoLeggedToken(twoLT)
  //     localStorage.setItem("twoLeggedToken", twoLT)
  //   })
  // }
  
  const twoLeggedT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMjAwMzU5Iiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjUzNTUwMTkxLCJqdGkiOiI4MGNhYmZjYS02N2Q4LTQwMmUtYWI5ZC1iZGQ0YmU4MzVlNjAifQ.narWpBMu1uTvRNCjG2zHmzvF1hMrPahS2NhxKxEfgU0";
  const deposit = () => {
    console.log("deposit 메소드 실행")
    // get2LeggedToken()

    const sendData = {
      "cntr_account_type" : "N",
      "cntr_account_num" : "200000000001",
      "wd_pass_phrase" : "NONE",
      "wd_print_content" : "캐시백",
      "name_check_option" : "off",
      "tran_dtime" : "20220225160000",
      "req_cnt" : "1",
      "req_list" : [
          {
          "tran_no" : "1",
          "bank_tran_id" : genTransId(),
          "fintech_use_num" : "120220035988941008441112",
          "print_content" : "캐시백드립니다",
          "tran_amt" : "500",
          "req_client_name" : "홍길동",
          "req_client_fintech_use_num" : "120220035988941008441112",
          "req_client_num" : "H1234",
          "transfer_purpose" : "TR"
          }
      ]
  }

  const sendData2 = {
    "cntr_account_type": "N",
    "cntr_account_num": "200000000001",
    "wd_pass_phrase": "NONE",
    "wd_print_content": "캐시백",
    "name_check_option": "on",
    "tran_dtime": "20220225160000",
    "req_cnt": "1",
    "req_list": [
        {
        "tran_no": "1",
        "bank_tran_id": genTransId(),
        "fintech_use_num": tofintechno, // "120220035988941008441112",  //"120220035988941008441112",
        "print_content": "캐시백드립니다",
        "tran_amt": "500",
        "req_client_name": "홍길동",
        "req_client_bank_code": "097",
        "req_client_account_num": tofintechno, //"00012300000678",  // "00012300000678", // 이건 모르겠다
        "req_client_num": "H1234",
        "transfer_purpose": "TR" // 송금 고객이 다른 계좌에 송금을 요청하는 경우
        }
    ]
}

  const option = {
    method: "POST",
    url: "/v2.0/transfer/deposit/fin_num",
    headers: {
      Authorization: `Bearer ${twoLeggedT}`,
    },
    data: sendData, //object
  };

  axios(option).then(({data}) => {
    console.log("입금이체 data : ",data)
    if (data.rsp_code === "A0000") {
      alert("최종 결제 성공!");
    }
  })
  };

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}에 출금이체를 발생시킵니다.</p>
      <input onChange={handleAmountChange}></input>
      <WithDrawButton onClick={handleWithdraw}>결제하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;
