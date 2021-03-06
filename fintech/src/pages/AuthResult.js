import React, { useState, useEffect } from "react";
import HeaderWhite from "../components/HeaderWhite";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResult = () => {
  console.log(useLocation().search);
  const { code } = queryString.parse(useLocation().search);
  const [accessToken, setaccessToken] = useState("토큰을 받기 전입니다.");
  const [userSeqNo, setuserSeqNo] = useState("사용자 번호");
  console.log(code);

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = () => {
    const sendData = {
      code: code,
      client_id: "9e2b2ee7-9f49-44f2-9a17-7b4b8244382d",
      client_secret: "502a2130-d3b4-4938-9bdd-8b36a060dfb9",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };
    
    const encodedData = queryString.stringify(sendData);

    const option = {
      method: "POST",
      url: "/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: encodedData,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      if (data.rsp_code === "O0001") {
        alert(data.rsp_message);
      } else {
        const accessToken = data.access_token;
        const userSeqNo = data.user_seq_no;
        setaccessToken(accessToken);
        setuserSeqNo(userSeqNo);
        console.log("accessToken : ",accessToken)
        console.log("accessToken : ",accessToken)
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);
      }
    });
  };

  return (
    <div>
      <HeaderWhite title={"AccessToken 요청"}></HeaderWhite>
      <p>인증코드 : {code}</p>
      <p>AccessToken : {accessToken}</p>
      <p>사용자번호 : {userSeqNo}</p>
      <button onClick={getAccessToken}>토큰 요청</button>
    </div>
  );
};

export default AuthResult;
