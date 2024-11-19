import { ReactNode } from "react";
import PillButton from "../buttons/PillButton";
import TextWrap from "../text/TextWrap";
import { FaApple } from "react-icons/fa";
import { IconType } from "react-icons";
import { Pill } from "../../styles/color";

export type MainContainer_gbimgProp4 = {
  title?: string;
  desc?: string;
  subdesc?: string;
  button?: { text: string; bg: Pill; color: Pill }[];
  mtop?: string;
  mbottom?: string;
  bottomdesc?: string;
  bgimg?: string;
  Icon?: IconType;
  color?: string;
  totaltop?: string;
};

const MainContainer_gbimg4 = (prop: MainContainer_gbimgProp4) => {
  const {
    title = "",
    desc = "",
    subdesc = "",
    button = [{ text: "", bg: "pill_button_blue", color: "pill_button_white" }],
    mtop = "0",
    mbottom = "0",
    bottomdesc = "",
    bgimg = "",
    color = "",
    Icon,
    totaltop = "0",
  } = prop;

  const css: React.CSSProperties = {
    background: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    height: "500px",
  };

  const incss: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    gap: "7px",
    marginTop: `${totaltop}%`,
  };
  return (
    <div style={css}>
      <div style={incss}>
        <TextWrap
          bold={true}
          color={color}
          size="32px"
          text={title}
          Icon={Icon}
        />
        <TextWrap bold={false} color={color} size="19px" text={desc} />
        <TextWrap bold={false} color={"#6e6e73"} size="14px" text={subdesc} />
        <div style={{ marginTop: `${mtop}%`, marginBottom: `${mbottom}%` }}>
          {/* <PillButton
            buttonText="더 알아보기"
            bgcolor="pill_button_blue"
            color="pill_button_white"
          ></PillButton>{" "}
          <PillButton
            buttonText="구입하기"
            bgcolor="pill_button_none"
            color="pill_button_blue"
          ></PillButton> */}
          {button.map((v) => {
            return (
              <PillButton
                buttonText={v.text}
                bgcolor={v.bg}
                color={v.color}
              ></PillButton>
            );
          })}
        </div>
        <div style={{ paddingBottom: "4%" }}>
          <TextWrap
            bold={false}
            color="#86868b"
            size="14px"
            text={bottomdesc}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer_gbimg4;
