import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  additionalClassName?: string; // Added property for custom class names
}

const Select: React.FC<SelectProps> = ({
  children,
  additionalClassName,
  ...props
}) => {
  return (
    <select
      className={`transition-all p-2 rounded-lg bg-neutral-50 outline-none focus:border-rose-500 focus:ring-rose-100 focus:ring-4 border-2 border-gray-300 dark:bg-black/30 dark:border-neutral-600 dark:focus:ring-rose-400/40 dark:focus:border-rose-400 cursor-pointer ${additionalClassName}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
