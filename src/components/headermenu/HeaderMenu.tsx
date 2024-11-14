import NavLinks from "../header__nav__links/NavLinks";
import { Pill, colorObj } from "../../styles/color";

type headerMenuProps = {
  bgcolor: Pill;
};

const HeaderMenu = (props: headerMenuProps) => {
  const headerMenuCss: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${colorObj[props.bgcolor]}`,
    listStyle: "none",
  };
  return (
    <ul style={headerMenuCss}>
      <NavLinks
        headerNavText="스토어"
        headerNavLink=""
        color="pill_button_white"
      ></NavLinks>
      <NavLinks
        headerNavText="Mac"
        headerNavLink=""
        color="pill_button_white"
      ></NavLinks>
      <NavLinks
        headerNavText="Ipad"
        headerNavLink=""
        color="pill_button_white"
      ></NavLinks>
    </ul>
  );
};

export default HeaderMenu;
