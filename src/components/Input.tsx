import React, { InputHTMLAttributes } from "react";

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
}

const Input: React.FC<InputComponentProps> = ({ id, className, ...props }) => {
  return (
    <input
      id={id}
      className={`transition block w-full p-2 text-gray-900 border border-2 border-gray-300 rounded-lg bg-neutral-50 focus:border-rose-400 focus:ring-rose-200 focus:ring-4 focus:border-purple-medium dark:bg-black/30 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-400/40 dark:focus:border-purple-medium outline-none flex-grow ${className}`}
      {...props}
    />
  );
};

export default Input;
