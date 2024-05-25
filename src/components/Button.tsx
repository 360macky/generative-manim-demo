import React from "react";

// Extend the button's native props
type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props} // Spread the rest of the button props here
      className={`text-white dark:text-white bg-gradient-to-r from-rose-500 via-rose-600 to-rose-500 dark:from-rose-600 dark:via-rose-600 dark:to-rose-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-lg py-2.5 text-center transition-all disabled:opacity-75 disabled:cursor-not-allowed ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
