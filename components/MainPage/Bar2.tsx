import * as React from "react"
import Image from 'next/image'
import { useRef } from 'react'
import { Button } from "../ui/button"
import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link';
import Book from "./Book";



const Bar = () => {
    return (
        <StorySection1 query={{}} />

    );
}

export default Bar

const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const GenerateOutput = ({ section }) => {
    let content;
    let backgroundColor;

    if (section === "finished") {
        content = <a className="status" style={{ backgroundColor: 'rgba(0, 255, 0, 0.5)' }}>完結</a>;
    } else if (section === "voting") {
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


export function StorySection1(query: any) {
    //request to the backend
    const queryStory = async () => {
        const { data } = await axios.get("http://127.0.0.1:5000/story");
        return data;
    };
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["story"],
        queryFn: queryStory,
    });

    if (isPending) {
        return (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
                    <div key={id} className="grid-flow-col w-108 h-84 gap-4">
                        <Skeleton className="h-52 w-full p-2 m-2 p-4 bg-slate-100" />
                        <Skeleton className="h-8 w-full p-4 m-2 bg-slate-100" />
                        <Skeleton className='h-12 w-full p-4 m-2 bg-slate-100' />
                    </div>
                )
                )}
            </div>
        )
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    else {

        const stories = data.records;

        // 提取 URL、書名和書籍 ID
        const Urls = stories.map(story => story.bookurl);
        const BookNames = stories.map(story => story.bookname);
        const BookIds = stories.map(story => story.book_id);
        const State = stories.map(story => story.state)
        const numberOfUrls = Urls.length;


        return (
            <div>
                <div className="bar-container">

                    <h1 style={{ fontSize: '36px' }} > 故事一覽</h1>
                </div>
                <div className="horizontal-scroll-menu" style={containerStyle}>

                    <div className="menu-wrapper">
                        <ul className="menu-items">
                            {stories.map((story: any, index: number) => (
                                <li key={index} >
                                    <Book story={story}/>
                                </li>
                            ))}
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


        )
    }
}