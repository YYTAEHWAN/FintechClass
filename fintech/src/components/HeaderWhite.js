import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  border-bottom: 1px dotted #000;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  /* background-color: #1c6ea4; */
`;

// 미리 오브젝트를 풀어줬다
// 이런걸 구조분해 할당이라고 한다
const HeaderWhite = ({title}) => {
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default HeaderWhite;
