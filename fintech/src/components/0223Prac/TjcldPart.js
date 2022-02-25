import React from 'react'

const TjcldPart = ({handleText, handleClick}) => {
  return (
    <div>
        <input onChange={handleText}></input>
        <button onClick={handleClick}>검색</button>
    </div>
  )
}

export default TjcldPart