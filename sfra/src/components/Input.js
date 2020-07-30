import React from "react";
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