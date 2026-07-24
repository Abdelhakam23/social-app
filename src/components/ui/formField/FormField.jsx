import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FormField({
  labelText,
  id,
  inputType,
  name,
  value,
  onChange,
  onBlur,
  className,
  placeholder,
  icon,
  error,
  touched,
  elementType,
  options,
}) {
  const renderElement = () => {
    switch (elementType) {
      case "input":
        return (
          <>
            <input
              id={id}
              type={inputType}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={`focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full ${className} `}
              placeholder={placeholder}
            />
          </>
        );
      case "select":
        return (
          <>
            <select
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={`focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full ${className} `}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.text}{" "}
                </option>
              ))}
            </select>
          </>
        );
    }
  };

  return (
    <>
      <div>
        <label className="font-medium mb-2" htmlFor={id}>
          {labelText}
        </label>
        <div className="relative">
          {renderElement()}
          <FontAwesomeIcon
            icon={icon}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
          />
        </div>
        {error && touched ? <p className="text-red-700">*{error}</p> : ""}
      </div>
    </>
  );
}
