import React from "react";

const InputField = ({ htmlFor, label, type, value, onChange }) => (
  <div>
    <label className="label" htmlFor={htmlFor}>
      {label}
    </label>
    <input
      type={type}
      className="input"
      id={htmlFor}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
