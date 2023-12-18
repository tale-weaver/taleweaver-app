import * as React from "react";
import Image from "next/image";

const Intro = ({}) => {
  return (
    
    <div className="w-full">
      <br></br>
      <h1 className="w-full flex" style={headingStyle} > Welcome </h1>
      <br></br>
      <br></br>
      <div style={containerStyle}>
        <h1
          style={childStyle}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("unfinish")?.offsetTop,
              behavior: "smooth",
            })
          }>我是作者</h1>
        <h1
          style={childStyle}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("finish")?.offsetTop,
              behavior: "smooth",
            })
          }>我是讀者</h1>
        <h1
          style={childStyle}
          onClick={() => (window.location.href = "./about-us")}
          >詳細規則</h1>
      </div>
    </div>
  );
};

export default Intro;

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  height: "auto",
};

const childStyle: React.CSSProperties = {
  fontSize: '2vw', // 使用 vw 單位，相對於視窗寬度
  textShadow: '2vw 2vw 2vw rgba(24, 24, 255, 0.3)', // 使用 vw 單位
  textAlign: 'center',
  display: 'inline-block',
  padding: '10vw', // 使用 vw 單位
  color: 'black', // Set text color to black
  backgroundColor: 'white',
  borderColor :'black',
  borderWidth: 2, // 調整邊框寬度
  borderStyle: 'solid', // 設定邊框樣式為實線
  cursor: 'pointer', // 添加手型指示器
};



// 合併樣式，使懸停樣式生效
const headingStyle: React.CSSProperties = {
  fontSize: '10vw', // 使用 vw 單位，相對於視窗寬度
  textShadow: '1vw 1vw 2vw rgba(0, 0, 0, 0.3)', // 使用 vw 單位
  textAlign: 'center',
  display: 'inline-block',
  padding: '5vw', // 使用 vw 單位
  color: 'white', // Set text color to black
  backgroundColor: 'black',
  borderRadius : 28,
};