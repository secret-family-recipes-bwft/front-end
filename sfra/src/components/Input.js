import React, { useState } from "react";

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
        <input
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
