export type FooterTextProps = {
  text?: string;
};

const FooterText = (props: FooterTextProps) => {
  const { text = "" } = props;
  return <div style={{ whiteSpace: "pre-line" }}>{text}</div>;
};

export default FooterText;
