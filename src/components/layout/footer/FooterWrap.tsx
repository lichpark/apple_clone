import FooterMenu from "./FooterMenu";
import FooterText from "./FooterText";

const footermenuList = [
  {
    title: "쇼핑 및 알아보기",
    desc: [
      "스토어",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV 및 홈",
      "AirTag",
      "액세서리",
    ],
  },
  {
    title: "계정",
    desc: [
      "Apple 계정관리",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV 및 홈",
      "AirTag",
      "액세서리",
    ],
  },
];

const footerTextList = [
  "1. Apple Intelligence는 Siri 및 기기 언어를 미국 영어로 설정한 iPhone 16전 모델, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini(A17 Pro 모델) 그리고M1 이후 iPad 및 Mac 모델에서 베타로 사용할 수 있으며, iOS 18, iPadOS 18,macOS Sequoia 업데이트를 통해 제공됩니다. 영어(오스트레일리아, 캐나다,아일랜드, 뉴질랜드, 남아프리카 공화국, 영국) 언어 지원은 올 12월제공됩니다. 내년까지 계속해서 기능, 플랫폼 및 지원 언어를 추가해 나갈예정입니다. 추가 예정인 지원 언어는 한국어, 중국어, 영어(인도, 싱가포르),프랑스어, 독일어, 이탈리아어, 일본어, 포르투갈어, 스페인어, 베트남어등입니다. \n 2. ₩930,000은 iPhone 15 Pro Max 1TB 모델의 보상 판매금액으로, 보상 판매 서비스는 Apple의 보상 판매 파트너사를 통해 제공됩니다.보상 판매 견적액은 예상 금액일 뿐이며, 실제 보상 판매 금액이 예상 금액보다낮을 수도 있습니다. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태,연도, 모델, 그리고 보상 판매 대상이 되는 제품이 최초 판매된 국가/지역에따라 달라집니다. 일부 기기는 보상 판매 대상이 아닙니다. 크레딧 또는 AppleStore Gift Card로 보상 판매를 받으려면 성인 연령 이상이어야 합니다. 새Apple 기기 구매 시, 현재 소유한 기기의 가치만큼 할인을 받을 수도 있습니다.최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한기기의 설명과 일치하는지 비교 검수 후 정해집니다. 매장에서 보상 판매를받으려면 사진이 부착된 정부 발행의 유효한 신분증이 필요합니다. 일부매장에서는 본 프로그램을 이용할 수 없습니다. 온라인과 오프라인 매장의 보상판매 금액은 차이가 있을 수 있습니다. 일부 매장에서는 추가 요구 사항이 있을수 있습니다. Apple의 보상 판매 파트너사는 어떤 보상 판매도 거래를거부하거나, 취소하거나 보상 판매 기기 및 그 수량을 제한할 권리를보유합니다. 더 자세한 내용은 적용 대상 기기에 대한 보상 판매 및 재활용서비스를 제공하는 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. Apple보상 판매 파트너사의 약관이 추가로 적용될 수 있습니다.\n Apple TV+이용을위해서는 구독이 필요합니다. \n 기능은 변경될 수 있습니다. 일부 기능,애플리케이션 및 서비스를 이용할 수 없는 국가나 언어도 있습니다.",
  "다양한 쇼핑 방법: Apple Store를 방문하거나, 리셀러를 찾아보거나, 080-330-8877번으로 전화하세요.",
  "Copyright © 2024 Apple Inc. 모든 권리 보유.     개인정보 처리방침 | 웹 사이트 이용 약관 | 판매 및 환불 | 법적 고지 | 사이트 맵",
  "대한민국",

  "애플코리아 유한회사 | 대표이사: Peter R. Denwood | 주소: 서울특별시 강남구 영동대로 517 | 전화: 080-333-4000 | https://support.apple.com/ko-kr | 사업자등록번호: 120-81-84429 |\n 통신판매업신고번호: 제2011-서울강남-00810호 | 호스팅 서비스 제공: Apple Inc. | 사업자정보",
];

const FooterWrap = () => {
  return (
    <div
      style={{
        color: "rgba(0, 0, 0, 0.56)",
        backgroundColor: " rgb(245, 245, 247)",
        fontSize: "12px",
      }}
    >
      <FooterText text={footerTextList[0]} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          marginTop: "5px",
        }}
      >
        {footermenuList.map((v) => (
          <FooterMenu obj={v} />
        ))}
      </div>
      <FooterText text={footerTextList[1]} />
      <div
        style={{
          borderBottom: "1px solid grey",
          width: "100%",
          height: "1px",
          margin: "5px 0px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <FooterText text={footerTextList[2]} />
        <FooterText text={footerTextList[3]} />
      </div>
      <div
        style={{
          marginTop: "15px",
        }}
      >
        <FooterText text={footerTextList[4]} />
      </div>
    </div>
  );
};

export default FooterWrap;
