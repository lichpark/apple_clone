import { ReactNode } from "react";
import PillButton from "../buttons/PillButton";
import TextWrap from "../text/TextWrap";
import { FaApple } from "react-icons/fa";

export type MainContainer_gbimgProp3 = {
  bgimg?: string;
  mtop?: string;
};

const MainContainer_gbimg3 = (props: MainContainer_gbimgProp3) => {
  const { bgimg = "", mtop = "" } = props;

  const css: React.CSSProperties = {
    background: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    width: "100%",
    height: "60vh",
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
          color="white"
          size="48px"
          text={`Iphone 16 PRO`}
        />
        <div style={{ marginBottom: "2%", marginTop: "28%" }}>
          <PillButton
            buttonText="더 알아보기"
            bgcolor="pill_button_blue"
            color="pill_button_white"
          ></PillButton>{" "}
          <PillButton
            buttonText="구입하기"
            bgcolor="pill_button_none"
            color="pill_button_blue"
          ></PillButton>
        </div>
        <div style={{ paddingBottom: "4%" }}>
          <TextWrap
            bold={false}
            color="#86868b"
            size="14px"
            text="Apple Intelligence, 현재 미국 영어로 서비스 중"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer_gbimg3;
