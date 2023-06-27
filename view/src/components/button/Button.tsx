import React from "react";
import cl from "./button.module.css";
type ButtonProps = {
  children: string | React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={cl.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
