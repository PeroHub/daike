import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder14: "rounded-[14px]",
  RoundedBorder8: "rounded-lg",
  CircleBorder29: "rounded-[29px]",
};
const variants = {
  icbFillOrange2007f: "bg-orange_200_7f",
  icbFillGray50001: "bg-gray_500_01",
  FillOrange200: "bg-orange_200 text-lime_800",
  FillAmberA400: "bg-amber_A400 text-gray_900",
};
const sizes = { smIcn: "p-1.5", mdIcn: "p-3", sm: "p-[13px]", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbRoundedBorder14",
    "RoundedBorder8",
    "CircleBorder29",
  ]),
  variant: PropTypes.oneOf([
    "icbFillOrange2007f",
    "icbFillGray50001",
    "FillOrange200",
    "FillAmberA400",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "sm", "md"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
