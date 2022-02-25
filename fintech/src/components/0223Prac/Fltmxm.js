import React from 'react'

const Fltmxm = ({showList}) => {
  return (
    <div>
        {showList.map(({title,url}) => {
                return <p>
                    {title}
                    <br></br>
                    -{url}
                </p>
            })}
    </div>
  )
}

export default Fltmxm