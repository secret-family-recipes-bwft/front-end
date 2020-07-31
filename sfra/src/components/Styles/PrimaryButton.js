import React from "react";
import styled from "styled-components";

const PButton = styled.button`
  width: 145px;
  height: 40px;

  background: #317df6;
  border-radius: 5px;
  border: none;
  color: white;

  font-size: 12px;
  font-family: "airbnb_cereal_appmedium";
`;

export default function PrimaryButton({ action }) {
  return <PButton>{action}</PButton>;
}

