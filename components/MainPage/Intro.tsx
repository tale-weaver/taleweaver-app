import * as React from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import { Button } from "../ui/button";
import { BookOpenText, FileImage, Brush,PenSquare, Upload, CheckCircle} from "lucide-react";
import { CalendarClock, RefreshCcw, ScrollText, ArrowRight} from "lucide-react";
import Link from "next/link";



const Intro = ({ }) => {
  return (
    <div>
      <div className="w-full flex flex-row">
        <div className="w-1/12 h-screen mt-4">
          <div className="grid grid-cols-4 h-screen">
            <div className="bg-slate-900"></div>
            <div className="bg-slate-600"></div>
            <div className="bg-slate-300"></div>
            <div className="bg-slate-100"></div>
          </div>

        </div>
        <div className="w-11/12 h-screen mt-4">
          <div className="grid grid-cols-3 grid-rows-3 w-full h-screen">
            <div className="col-span-2 relative">
              <Image
                src={'/story_images/shelf.jpg'}
                alt="shelf"
                fill
                sizes="100vw"
                className='object-cover'
              />
            </div>
            <div className="justify-self-end self-end pb-4">
              <p className="text-2xl">WebAPP</p>
              <p className="text-2xl ">Group D</p>
            </div>
            <div className="col-span-2 row-span-2 self-center">
              <p className="text-8xl pl-4">Tale</p>
              <p className="text-8xl pl-4">Weaver</p>
            </div>
            <div className="row-span-2 relative">
              <Image
                src={'/story_images/drawing.jpg'}
                alt="shelf"
                fill
                sizes="100vw"
                className='object-cover'
              />
            </div>

          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-gray-700 rounded-lg mt-8">
        <div className="flex justify-center mb-8 pb-4 w-full h-1/4 border-b-4">
          <ScrollText color="#FFFFFF" size={48} className="self-end mr-2"/><p className="text-4xl self-end text-slate-50">網站規則</p>         
        </div>
        <div className="h-2/3">
          <div className="grid grid-cols-3 w-full h-full justify-items-center">
            <div className="border-2 rounded-lg w-5/6 bg-slate-50">
              <div className="grid grid-flow-fow items-center mt-8">
                <p className="flex justify-self-center text-2xl">每個故事為8頁</p>
                <p className="flex justify-self-center text-xl">Every single story has 8 pages</p>
                <div className="flex justify-self-center items-center text-4xl mt-16">
                  <BookOpenText size={64} /> = 8 x  <FileImage size={64} />
                </div>

              </div>
            </div>

            <div className="border-2 rounded-lg w-5/6 bg-slate-50">
              <div className="grid grid-flow-row items-center mt-8">
                <p className="flex justify-self-center text-2xl">每頁徵稿日5天、投票日1天</p>
                <p className="flex justify-self-center text-xl">Each page has 5 summitting days</p>
                <p className="flex justify-self-center text-xl">and 1 voting days</p>
                  <div className="flex justify-self-center items-center text-4xl mt-16">                  
                    <Upload size={64} /> = 5<CalendarClock size={64} className="ml-2"/>                   
                  </div>
                  <div className="flex justify-self-center items-center mt-4"><RefreshCcw size={48}/></div>
                  <div className="flex justify-self-center items-center text-4xl mt-4">                  
                    <CheckCircle size={64}/> = 1<CalendarClock size={64} className="ml-2"/>                   
                  </div>
              </div>
            </div>

            <div className="border-2 rounded-lg w-5/6 bg-slate-50">
              <div className="grid grid-flow-fow items-center mt-8">
                <p className="flex justify-self-center text-2xl">發揮創意完成故事接龍吧</p>
                <p className="flex justify-self-center text-xl">Present your idea in TaleWeaver</p>
                <div className="flex justify-self-center items-center mt-16">                  
                  <Brush size={64} className="mr-4"/><PenSquare size={64} />
                </div>
              </div>              
            </div>

          </div>

        </div>
      </div>

      <div className="w-full grid justify-center mt-8">
        <Link href={'/story'}>
          <Button className="h-12 rounded-md px-8 text-xl">開始瀏覽/創作<ArrowRight /></Button>
        </Link>
      </div>

    </div>


    // <div className="w-full">
    //   <br></br>
    //   <h1 className="w-full flex" style={headingStyle} > Welcome </h1>
    //   <br></br>
    //   <br></br>
    //   <div style={containerStyle}>
    //     <h1
    //       style={childStyle}
    //       onClick={() =>
    //         window.scrollTo({
    //           top: document.getElementById("unfinish")?.offsetTop,
    //           behavior: "smooth",
    //         })
    //       }>我是作者</h1>
    //     <h1
    //       style={childStyle}
    //       onClick={() =>
    //         window.scrollTo({
    //           top: document.getElementById("finish")?.offsetTop,
    //           behavior: "smooth",
    //         })
    //       }>我是讀者</h1>
    //     <h1
    //       style={childStyle}
    //       onClick={() => (window.location.href = "./about-us")}
    //       >詳細規則</h1>
    //   </div>
    //   <br />
    //   <div className="w-full flex" style={headingStyle2} >
    //   <h1 style={{ fontSize: '8vw' }} >使用說明</h1>
    //   <div>
    //   每個故事均為八頁，每頁都有五天的投稿時間，投稿結束後會有一天的投票時間，<br></br>
    //   最高票者即為下一頁的故事。大家一起發揮創意完成故事接龍吧！！！
    //   </div>
    //   </div>
    // </div>
  );
};

export default Intro;

// const containerStyle: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   margin: "0 auto",
//   width: "100%",
//   height: "auto",
// };


// const childStyle: React.CSSProperties = {
//   fontSize: '2vw', // 使用 vw 單位，相對於視窗寬度
//   textShadow: '2vw 2vw 2vw rgba(24, 24, 255, 0.3)', // 使用 vw 單位
//   textAlign: 'center',
//   display: 'inline-block',
//   padding: '10vw', // 使用 vw 單位
//   color: 'black', // Set text color to black
//   backgroundColor: 'white',
//   borderColor: 'black',
//   borderWidth: 2, // 調整邊框寬度
//   borderStyle: 'solid', // 設定邊框樣式為實線
//   cursor: 'pointer', // 添加手型指示器
//   borderRadius: 28,
// };



// // 合併樣式，使懸停樣式生效
// const headingStyle: React.CSSProperties = {
//   fontSize: '10vw', // 使用 vw 單位，相對於視窗寬度
//   textShadow: '1vw 1vw 2vw rgba(0, 0, 0, 0.3)', // 使用 vw 單位
//   textAlign: 'center',
//   display: 'inline-block',
//   padding: '5vw', // 使用 vw 單位
//   color: 'white', // Set text color to black
//   backgroundColor: 'black',
//   borderRadius: 28,
// };

// // 合併樣式，使懸停樣式生效
// const headingStyle2: React.CSSProperties = {
//   fontSize: '2vw', // 使用 vw 單位，相對於視窗寬度
//   textAlign: 'center',
//   display: 'inline-block',
//   padding: '5vw', // 使用 vw 單位
//   color: 'white', // Set text color to black
//   backgroundColor: 'black',
//   borderRadius: 28,
// };