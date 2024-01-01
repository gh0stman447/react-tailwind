import clsx from 'clsx';
import React from 'react';

export const Button = ({ children, size, variant, className }) => {
  const buttonClassName = clsx(
    {
      md: 'py-2 px-5 rounded text-sm',
      lg: 'px-6 py-2 rounded',
    }[size],
    {
      outline: 'border-2 border-almost-black text-medium-gray',
      without: 'text-medium-gray',
      black:
        'bg-black hover:bg-almost-white border border-black hover:text-almost-black font-bold text-medium-gray',
    }[variant],
  );
  return <button className={clsx(buttonClassName, className)}>{children}</button>;
};
