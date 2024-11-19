import { ReactNode } from "react";
import PillButton from "../buttons/PillButton";
import TextWrap from "../text/TextWrap";
import { FaApple } from "react-icons/fa";

export type MainContainer_gbimgProp = {
  bgimg?: string;
  mtop?: string;
};

const MainContainer_gbimg = (props: MainContainer_gbimgProp) => {
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
          text={` Apple Vision Pro`}
          Icon={FaApple}
        />
        <TextWrap
          bold={false}
          color="black"
          size="24px"
          text="공간 컴퓨팅의 시대가 이제 여기에."
        />
        <div style={{ marginBottom: "4%" }}>
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
      </div>
    </div>
  );
};

export default MainContainer_gbimg;
