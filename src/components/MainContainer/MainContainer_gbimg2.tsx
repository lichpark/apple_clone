import { ReactNode } from "react";
import PillButton from "../buttons/PillButton";
import TextWrap from "../text/TextWrap";
import { FaApple } from "react-icons/fa";

export type MainContainer_gbimgProp2 = {
  bgimg?: string;
  mtop?: string;
};

const MainContainer_gbimg2 = (props: MainContainer_gbimgProp2) => {
  const { bgimg = "", mtop = "" } = props;

  const css: React.CSSProperties = {
    background: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    width: "100%",
    height: "570px",
    // marginTop: "40px",
    marginTop: `${mtop}px`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
  };

  const incss: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    gap: "7px",
  };
  return (
    <div style={css}>
      <div style={incss}>
        <TextWrap
          bold={true}
          color="black"
          size="48px"
          text={`올 선물은 감동`}
        />
        <TextWrap
          bold={false}
          color="black"
          size="24px"
          text="누구나 받고싶은 연말 연시 선물"
        />
        <div style={{ marginBottom: "4%" }}>
          <PillButton
            buttonText="선물 쇼핑하기"
            bgcolor="pill_button_blue"
            color="pill_button_white"
          ></PillButton>{" "}
        </div>
      </div>
    </div>
  );
};

export default MainContainer_gbimg2;
