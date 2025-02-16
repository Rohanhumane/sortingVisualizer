import React from "react";

interface button {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
  disabled: boolean;
}

const Button: React.FC<button> = (props) => {
  return (
    <button {...props} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
