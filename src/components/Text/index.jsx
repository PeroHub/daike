import React from "react";

const variantClasses = {
  h1: "text-5xl sm:text-[38px] md:text-[44px]",
  h2: "text-4xl sm:text-[32px] md:text-[34px]",
  h3: "font-semibold md:text-3xl sm:text-[28px] text-[32px]",
  h4: "font-semibold text-3xl sm:text-[26px] md:text-[28px]",
  h5: "font-bold sm:text-[22.66px] md:text-[24.66px] text-[26.66px]",
  h6: "font-bold text-[22px] sm:text-lg md:text-xl",
  body1: "font-semibold text-xl",
  body2: "text-lg",
  body3: "text-base",
  body4: "text-sm",
  body5: "font-normal text-xs",
  body6: "font-normal text-[10px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
