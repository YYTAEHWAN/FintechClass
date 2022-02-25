import React from 'react'
import axios from 'axios'
import HeaderWhite from '../HeaderWhite'

// url은 www.newsapi.org로 들어가면 된다

const searchURL= `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e0465ace775647aaa3b3311d406d4d4b` 

const AXPrac = () => {
    const handleClick = () => {
        console.log("클릭되었습니다")
        axios
        .get(searchURL)
        .then((response) => {
            console.log("response")
        })
        .catch((error) => {
            console.error("error happened!")
        })
    }
    

  return (
    <div>
        <HeaderWhite title="뉴스 검색"></HeaderWhite>
        <input></input>
        <button onClick={handleClick}>검색</button>
    </div>
  )
}

export default AXPrac