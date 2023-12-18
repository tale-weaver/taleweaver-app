import * as React from "react"
import Image from 'next/image'
import { useRef } from 'react'
import { Button } from "../ui/button"


const Bar = ({section}:{section:String}) => {
  return (
    <div>
    <div className="bar-container">
    
    <h1 style={{ fontSize: '36px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} >{section}</h1>
    <Button onClick={() => handleButtonClick(section)} style={{ marginLeft: 'auto' }}>find all</Button>
    </div>
    <div className="horizontal-scroll-menu" style={containerStyle}>
      <div className="menu-wrapper">
        <ul className="menu-items">
          <li onClick={() => window.location.href="./about-us"}> <Image src="/image/p1.jpg" alt="p1" width={300} height={300}/>
          <a>故事名</a></li>
          <li><Image src="/image/p2.jpg" alt="p2" width={300} height={300} />
          <a>故事名</a></li>
          <li><Image src="/image/p3.jpg" alt="p3"  width={300} height={300} />
          <a>故事名</a></li>
          <li><Image src="/image/p4.jpg" alt="p4"  width={300} height={300} /></li>
          <li><Image src="/image/p5.jpg" alt="p5"  width={300} height={300} /></li>
          <li><Image src="/image/p6.jpg" alt="p6"  width={300} height={300} /></li>
          <li><Image src="/image/p7.jpg" alt="p7"  width={300} height={300} /></li>
        </ul>
      </div>
      </div>
      <style jsx>{`
        .bar-container {
          display: flex;
          align-items: center; 
        }

        h1 {
          margin-right: 100px; 
        }

        .horizontal-scroll-menu {
          overflow-x: auto;
        }

        .menu-container {
          overflow-x: auto;
        }

        .menu-items {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        .menu-items li {
          margin-right: 20px;
          flex-shrink: 0; 
          cursor: 'pointer';
        }

        .menu-items a {
          text-decoration: none;
          color: black;
          font-weight: bold;
          padding: 10px;
          border-radius: 5px;
          background-color: #ddd;
          cursor: 'pointer';
        }

        .menu-items a:hover {
          background-color: #ccc;
        }
      `}</style>
     
    </div>
  );
}

export default Bar

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const handleButtonClick = (section) => {
  if (section === '已完成故事') {
    window.location.href = "./story?state=finished"; // 修改成實際的 A 網頁路徑
  } else {
    if (section === '徵稿中故事'){
      window.location.href = "./story?state=submitting";
    }else{
    window.location.href = "./story?state=voting"; // 修改成實際的 B 網頁路徑
  }}
}