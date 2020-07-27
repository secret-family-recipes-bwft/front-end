import React, { useState } from "react";

export default function Input({ label, name, type, value, onChange, errors }) {
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
        />
      </label>
      <br />
      <br />
    </div>
  );
}
