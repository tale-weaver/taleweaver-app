import * as React from "react"
import Image from 'next/image'
import { useRef } from 'react'
import { Button } from "../ui/button"


const Bar = () => {
  return (
    <div>
    <div className="bar-container">
    
    <h1 style={{ fontSize: '36px'}} >故事一覽</h1>
    </div>
    <div className="horizontal-scroll-menu" style={containerStyle}>
      <div className="menu-wrapper">
        <ul className="menu-items">
          {/*上標的部分，把 section 換成抓出來的狀態，最後面的GenerateOutput也要一起換 */}
          <li onClick={() => window.location.href="./about-us"}><GenerateOutput section="已完成故事"/><Image src="/image/p3.jpg" alt="A"  width={600} height={400} style={{ width: 'auto', height: 'auto' }} />
          <a className="title">A</a></li>
          <li onClick={() => window.location.href="./about-us"}><GenerateOutput section="接龍中故事"/><Image src="/image/p3.jpg" alt="B"  width={600} height={400} style={{ width: 'auto', height: 'auto' }} />
          <a className="title">B</a></li>
          <li onClick={() => window.location.href="./about-us"}><GenerateOutput section="投票中故事"/><Image src="/image/p3.jpg" alt="C"  width={600} height={400} style={{ width: 'auto', height: 'auto' }} />
          <a className="title">C</a></li>
          <li onClick={() => window.location.href="./about-us"}><GenerateOutput section="已完成故事"/><Image src="/image/p3.jpg" alt="D"  width={600} height={400} style={{ width: 'auto', height: 'auto' }} />
          <a className="title">D</a></li>
          <li onClick={() => window.location.href="./about-us"}><GenerateOutput section="接龍中故事"/><Image src="/image/p3.jpg" alt="E"  width={600} height={400} style={{ width: 'auto', height: 'auto' }} />
          <a className="title">E</a></li>
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
          position: relative;
          margin-right: 20px;
          flex-shrink: 0; 
          cursor: 'pointer';
        }



    

        .title {
          position: absolute;
          bottom: 0;
          left: 0;
          text-decoration: none;
          color: black;
          padding: 10px;
          background-color: #ddd;
          cursor: pointer;
          font-size: 12px;
          font-family: fantasy;
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

const handleButtonClick = () => {
    window.location.href = "./story?state=finished"; }

const GenerateOutput = ({ section }) => {
      let content;
      let backgroundColor;
    
      if (section === "已完成故事") {
        content = <a className="status" style={{ backgroundColor: 'rgba(0, 255, 0, 0.5)' }}>完結</a>;
      } else if (section === "接龍中故事") {
        content = <a className="status" style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>接龍</a>;
      } else {
        content = <a className="status" style={{ backgroundColor: 'rgba(0, 0, 255, 0.5)' }}>投票</a>;
      }
    
      return (
        <div className="output-container">
          {content}
          <style>
            {`
              .status {
                position: absolute;
                top: 0;
                right: 0;
                text-decoration: none;
                color: black;
                padding: 10px;
                font-weight: bold;
                cursor: pointer;
                font-size: 12px;
                font-family: monospace;
              }
            `}
          </style>
        </div>
      );
    };
    