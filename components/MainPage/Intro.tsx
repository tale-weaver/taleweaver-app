import * as React from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import { Button } from "../ui/button";
import { BookOpenText, FileImage, Brush,PenSquare, Upload, CheckCircle} from "lucide-react";
import { CalendarClock, RefreshCcw, ScrollText, ArrowRight} from "lucide-react";
import Link from "next/link";
import Bar from "./Bar2";
import { useSession } from "next-auth/react";



const Intro = ({ }) => {
  const { data: session, status } = useSession()
  return (
    <div>
      <div className="w-full flex flex-row">
        <div className="w-1/12 h-screen">
          <div className="grid grid-cols-4 h-screen">
            <div className="bg-slate-900"></div>
            <div className="bg-slate-600"></div>
            <div className="bg-slate-300"></div>
            <div className="bg-slate-100"></div>
          </div>

        </div>
        <div className="w-11/12 h-screen">
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
                <p className="flex justify-self-center text-2xl text-center">每個故事為8頁</p>
                <p className="flex justify-self-center text-xl text-center">Every single story has 8 pages</p>
                <div className="flex justify-self-center items-center text-4xl mt-16">
                  <BookOpenText size={64} /> = 8 x  <FileImage size={64} />
                </div>

              </div>
            </div>

            <div className="border-2 rounded-lg w-5/6 bg-slate-50">
              <div className="grid grid-flow-row items-center mt-8">
                <p className="flex justify-self-center text-2xl text-center">每頁徵稿日5天、投票日1天</p>
                <p className="flex justify-self-center text-xl text-center">Each page has 5 summitting days and 1 voting days</p>
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
                <p className="flex justify-self-center text-2xl text-center">發揮創意完成故事接龍吧</p>
                <p className="flex justify-self-center text-xl text-center">Present your idea in TaleWeaver</p>
                <div className="flex justify-self-center items-center mt-16">                  
                  <Brush size={64} className="mr-4"/><PenSquare size={64} />
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        {(status === 'authenticated') && <Bar />}
      </div>
      <div className="w-full grid justify-center mt-8">
        <Link href={'/story'}>
          <Button className="h-12 rounded-md px-8 text-xl hover:animate-bounce">開始瀏覽/創作<ArrowRight /></Button>
        </Link>
        
      </div>

    </div>

  );
};

export default Intro;
