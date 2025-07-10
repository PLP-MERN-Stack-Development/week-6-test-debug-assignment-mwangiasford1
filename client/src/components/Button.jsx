import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  let classes = `btn btn-${variant} btn-${size}`;
  if (disabled) classes += ' btn-disabled';
  if (className) classes += ` ${className}`;
  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button; 