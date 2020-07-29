import React, { useState } from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  // justify-content: flex-start;
  // align-items: flex-start;
  // align-content: flex-start;
  margin-bottom: 40px;
`;

const InputLabel = styled.label`
  // font-family: Airbnb Cereal App;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: left;
`;

const InputField = styled.input`
  border: none;
  border-bottom: 1px solid #2d2e32;
  width: 100%;
`;

export default function TextInputStyle({
  label,
  name,
  type,
  value,
  onChange,
  errors,
  placeholder,
}) {
  return (
    <InputDiv>
      <InputLabel>
        {label}
        <InputField
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          errors={errors}
          placeholder={placeholder}
        />
      </InputLabel>
    </InputDiv>
  );
}
