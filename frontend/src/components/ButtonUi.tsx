import type { ReactElement } from "react";

export interface buttonProp {
  text?: string;
  onClick?: (e?:any) =>Promise<void>;
  size: "lg" | "md" | "sm";
  className?: string;
  variant: "primary" | "secondary";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}
const defaultStyle = "rounded-md flex items-center";
const variantStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-800",
};
const sizeStyle = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

export const Button = (props: buttonProp): any => {
  return (
    <button
      className={
        props?.className +
        ` ${defaultStyle} ${variantStyle[props.variant]} ${
          sizeStyle[props.size]
        }`
      }
      onClick={props?.onClick}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
      {props?.text}
      {props.endIcon ? <div className="pl-2">{props.endIcon}</div> : null}
    </button>
  );
};
