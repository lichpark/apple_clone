export type footerMenuProps = {
  obj?: { title?: string; desc: string[] };
};

const FooterMenu = (prop: footerMenuProps) => {
  const { obj = { title: "", desc: [] } } = prop;
  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
        }}
      >
        {obj.title}
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: "2px",
        }}
      >
        {obj.desc.map((v) => {
          return <li style={{ listStyleType: "none" }}>{v}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterMenu;
