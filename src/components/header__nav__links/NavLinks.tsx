import { Pill, colorObj } from "../../styles/color";

type NavLinkProp = {
  headerNavText: string;
  headerNavLink: string;
  color: Pill;
};

export const NavLinks = (props: NavLinkProp) => {
  const NavLink__Css: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const NavLink__aCss: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: "400px",
    lineHeight: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: `${colorObj[props.color]}`,
    textDecoration: "none",
    whiteSpace: "nowrap",
    padding: "10px 5px",
  };
  return (
    <li style={NavLink__Css}>
      <a href={props.headerNavLink} style={NavLink__aCss}>
        {props.headerNavText}
      </a>
    </li>
  );
};

export default NavLinks;
