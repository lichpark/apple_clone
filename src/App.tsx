import React from "react";
import PillButton from "./components/buttons/PillButton";
import HeaderMenu from "./components/headermenu/HeaderMenu";

function App() {
  return (
    <div className="App">
      <PillButton
        buttonText="더 알아보기"
        bgcolor="pill_button_blue"
        color="pill_button_white"
      ></PillButton>
      <>
        <HeaderMenu bgcolor={"header_background_black"}></HeaderMenu>
      </>
    </div>
  );
}

export default App;
