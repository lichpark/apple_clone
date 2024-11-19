import React, { Children, ReactNode } from "react";
import { IconType } from "react-icons";

type BigTitleProps = {
  size?: string;
  text?: string;
  bold?: boolean;
  color?: string;
  Icon?: IconType;
};

const TextWrap = (props: BigTitleProps) => {
  const { size = "", color = "black", bold = false, text = "", Icon } = props;

  const bigTitleCss: React.CSSProperties = {
    fontSize: `${size}`,
    color: `${color}`,
    fontWeight: `${bold}`,
    letterSpacing: "-2px",
    whiteSpace: "pre-line",
    textAlign: "center",
  };
  return (
    <div style={bigTitleCss}>
      {Icon && <Icon />} {/* Icon이 있을 때만 렌더링 */}
      {text}
    </div>
  );
};

export default TextWrap;
