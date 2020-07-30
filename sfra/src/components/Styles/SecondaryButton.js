import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  width: 145px;
  height: 40px;
  background: white;
  border-radius: 5px;
  border: 1px solid #317df6;
  color: #317df6;
  font-size: 12px;
  font-family: "airbnb_cereal_appmedium";
  flex-grow: 1;
  margin-top: 40px;
  margin-right: 80px;
  margin-bottom: 0px;
`;

export default function SecondaryButton({ action }) {
  return <SButton>{action}</SButton>;
}