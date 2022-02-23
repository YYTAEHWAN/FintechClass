import React from "react";

const NewsList = ({ searchResultList }) => {
  return (
    <div>
      {searchResultList.map(({ title,url }, index) => {
        return <p key={index}>
          {title}
          <br></br>
          -{url}
          </p>;
      })}
    </div>
  );
};

export default NewsList;
