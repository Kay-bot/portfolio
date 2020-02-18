import React from "react";
import styled from "styled-components";

import logo1 from "../images/logo1.png";

const Brand = () => {
  return <Image src={logo1} alt="Company Logo" />;
};

export default Brand;

const Image = styled.img`
  height: 100%;
`;
