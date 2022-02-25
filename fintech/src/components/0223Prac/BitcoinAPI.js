import React from 'react'
import axios from 'axios'
import HeaderWhite from '../HeaderWhite'
import { useState } from 'react'
import TjcldPart from './TjcldPart'
import Fltmxm from './Fltmxm'

const BitcoinAPI = () => {
    
    const [inputText, setInputText] = useState("");
    const [outputList, setOutputList] = useState([]);

    const handleInputText = (e) => {
        // input 에 적은 글자를 나타나게끔
        const { value } = e.target;
        console.log(value);
        setInputText(value);
        console.log("inputText : ", inputText);
    }

    const handleOutputList = () => {
        const URL = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e0465ace775647aaa3b3311d406d4d4b&q=${inputText}`
        axios
        .get(URL)
        .then((response) => {
          console.log(response)
          setOutputList(response.data.articles)
          console.log("outputList : ", outputList)
        })
        .catch((error) => {
          console.error(error)
        })
    }

  return (
    <div>
        <HeaderWhite title="Bitcoin search api test"></HeaderWhite>
        <TjcldPart
          handleText={handleInputText}
          handleClick={handleOutputList}
        ></TjcldPart>
        <Fltmxm showList={outputList}></Fltmxm>
    </div>
  )
}

export default BitcoinAPI