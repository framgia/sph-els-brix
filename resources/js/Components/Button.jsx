import React from "react";

export default function Button({
  type = "submit",
  className = "",
  processing,
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center px-4 py-1 bg-blue-900 border border-transparent rounded-md font-semibold text-white active:bg-gray-900 transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
      {...rest}
    >
      {children}
    </button>
  );
}
