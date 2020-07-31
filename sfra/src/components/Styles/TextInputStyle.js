<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
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
<<<<<<< HEAD
=======
  const errorMessage = errors[name];
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
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
<<<<<<< HEAD
      </InputLabel>
    </InputDiv>
  );
}
=======
        {errorMessage !== 0 && (
          <p style={{ color: "red", fontSize: ".75em" }}>{errorMessage}</p>
        )}
      </InputLabel>
    </InputDiv>
  );
}
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
