import { Children } from "react";
import MainContainer_gbimg4, {
  MainContainer_gbimgProp4,
} from "../../../MainContainer/MainContainer_gbimg4";
import { FaApple } from "react-icons/fa";
import { Pill } from "../../../../styles/color";

export type ButtonType = {
  text: string;
  bg: Pill;
  color: string;
};

const main4List = [
  {
    title: "iPad mini",
    color: "black",
    desc: "놀라움이 한눈에 쏙.",
    subdesc: "11월 21일 출시",
    button: [
      {
        text: "더 알아보기",
        bg: "pill_button_blue" as "pill_button_blue",
        color: "pill_button_white" as "pill_button_white",
      },
      {
        text: "사전주문하기",
        bg: "pill_button_none" as "pill_button_none",
        color: "pill_button_blue" as "pill_button_blue",
      },
    ],
    mtop: "5",
    mbottom: "45",
    totaltop: "5",
    bottomdesc: "Apple Intelligence, 현재 미국 영어로 서비스 중",
    bgimg:
      "https://www.apple.com/v/home/bv/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_medium.jpg",
  },
  {
    title: "Vision Pro",
    color: "black",
    desc: "공간 컴퓨팅의 시대가 이제 여기에.",
    subdesc: "",
    button: [
      {
        text: "더 알아보기",
        bg: "pill_button_blue" as "pill_button_blue",
        color: "pill_button_white" as "pill_button_white",
      },
      {
        text: "구입하기",
        bg: "pill_button_none" as "pill_button_none",
        color: "pill_button_blue" as "pill_button_blue",
      },
    ],
    mtop: "5",
    mbottom: "5",
    totaltop: "60",
    bottomdesc: "",
    Icon: FaApple,
    bgimg:
      "https://www.apple.com/kr/home/bv/images/promos/apple-vision-pro/promo_apple_vision_pro_alt_announce__eia1hy3lfu2q_medium.jpg",
  },
  {
    title: "Ipad Pro",
    color: "white",
    desc: "놀라우리만치 얋다. 엄청나게 강력하다",
    subdesc: "",
    button: [
      {
        text: "더 알아보기",
        bg: "pill_button_blue" as "pill_button_blue",
        color: "pill_button_white" as "pill_button_white",
      },
      {
        text: "구입하기",
        bg: "pill_button_none" as "pill_button_none",
        color: "pill_button_blue" as "pill_button_blue",
      },
    ],
    mtop: "2",
    mbottom: "50",
    totaltop: "5",
    bottomdesc: "Apple Intelligence, 현재 미국 영어로 서비스 중",
    bgimg:
      "https://www.apple.com/kr/home/bv/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_medium.jpg",
  },
  {
    title: "Watch",
    color: "black",
    desc: "얇아진 두께. 더 커진 존재감",
    subdesc: "",
    button: [
      {
        text: "더 알아보기",
        bg: "pill_button_blue" as "pill_button_blue",
        color: "pill_button_white" as "pill_button_white",
      },
      {
        text: "구입하기",
        bg: "pill_button_none" as "pill_button_none",
        color: "pill_button_blue" as "pill_button_blue",
      },
    ],

    mtop: "3",
    mbottom: "5",
    totaltop: "5",
    Icon: FaApple,
    bgimg:
      "https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_medium.jpg",
  },
  {
    title: "MacBook Air",
    color: "black",
    desc: "날렵하게. 강력하게 M3답게.",
    subdesc: "",
    button: [
      {
        text: "더 알아보기",
        bg: "pill_button_blue" as "pill_button_blue",
        color: "pill_button_white" as "pill_button_white",
      },
      {
        text: "구입하기",
        bg: "pill_button_none" as "pill_button_none",
        color: "pill_button_blue" as "pill_button_blue",
      },
    ],

    mtop: "2",
    mbottom: "5",
    totaltop: "5",
    bgimg:
      "https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg",
  },
  {
    title: "Trade In",
    color: "black",
    desc: "iPhone 12 이상의 모델을 보상 판매 하면 \n \\200,000-\\930,000 \n 상당의 크레딧이",
    subdesc: "",
    button: [
      {
        text: "견적 알아보기",
        bg: "pill_button_blue" as "pill_button_blue",
        color: "pill_button_white" as "pill_button_white",
      },
    ],

    mtop: "3",
    mbottom: "3",
    Icon: FaApple,
    totaltop: "5",
    bgimg:
      "https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg",
  },
];

const Main4 = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        padding: "5px",
        gap: "5px",
      }}
    >
      {main4List.map((item, index) => (
        <MainContainer_gbimg4
          key={index} // 고유한 키 지정
          title={item.title}
          desc={item.desc}
          subdesc={item.subdesc}
          button={item.button}
          mtop={item.mtop}
          mbottom={item.mbottom}
          bottomdesc={item.bottomdesc}
          Icon={item.Icon} // Icon 전달
          bgimg={item.bgimg}
          color={item.color}
          totaltop={item.totaltop}
        />
      ))}
    </div>
  );
};

export default Main4;
