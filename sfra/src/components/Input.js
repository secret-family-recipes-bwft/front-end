<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
import styled from "styled-components";

const InputField = styled.input`
  border: none;
  border-bottom: 1px solid #2d2e32;
  width: 256px;
`;

export default function Input({
  label,
  name,
  type,
  value,
  onChange,
  errors,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={label}>
        {label}
        <br />
        <InputField
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          errors={errors}
          placeholder={placeholder}
        />
      </label>
      <br />
      <br />
    </div>
  );
}