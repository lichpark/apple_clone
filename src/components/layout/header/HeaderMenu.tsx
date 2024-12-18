import { Pill, colorObj } from "../../../styles/color";
import { ReactNode } from "react";

type headerMenuProps = {
  bgcolor: Pill;
} & { children: ReactNode[] };

const HeaderMenu = ({ children, bgcolor }: headerMenuProps) => {
  const headerMenuCss: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: `${colorObj[bgcolor]}`,
    listStyle: "none",
    margin: "0",
    position: "fixed",
    left: "0",
    top: "0",
    height: "40px",
    width: "100%",
  };
  return (
    <header>
      <ul style={headerMenuCss}>{children}</ul>
    </header>
  );
};

export default HeaderMenu;
