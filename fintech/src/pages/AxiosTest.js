import axios from "axios";
import React from 'react';
import HeaderWhite from '../components/HeaderWhite';

const AxiosTest = () => {

    const handleClick = () => {
        console.log("click");
        axios
            // 이 GET은 CORS를 없애주는 역할을 하는 크롬확장 프로그램을 사용하였다
            .get('https://newsapi.org/v2/everything?q=tesla&from=2022-01-23&sortBy=publishedAt&apiKey=e0465ace775647aaa3b3311d406d4d4b')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    };

  return (
    <div>
        <HeaderWhite title="http 통신" ></HeaderWhite>
        <button onClick={handleClick}>데이터 요청하기</button>
    </div>
  )
}

export default AxiosTest