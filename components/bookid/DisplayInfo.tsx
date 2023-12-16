'use client';

import React from "react";
import { useSearchParams } from "next/navigation";
import ViewBasic from "./ViewBasic";
import Discription from "./Discription";
import CommentSection from "../CommentSection";

//這是個假資料
const story = {
    bookurl: "/story_images/clock.jpg",
    bookname: 'clock',
    book_id: 6,
    numlikes: 10,
    numcomments: 6,
    state: 'submitting',
    date: '2023-10-10',
    pages: [    
    {
        pageurl: '/pages/p1.JPG',
        creator: 'Amy'
    },
    {
        pageurl: '/pages/p2.JPG',
        creator: 'Peter'
    },
    {
        pageurl: '/pages/p3.JPG',
        creator: 'Jane'
    },
    {
        pageurl: '/pages/p4.JPG',
        creator: 'Alex'
    },
    {
        pageurl: '/pages/p5.JPG',
        creator: 'Ryvn'
    }] //已成功接龍的頁數
}

const disc = {
    state: story.state,
    pages: story.pages,
    book_id : story.book_id
}

export default function DisplayInfo() {
    const searchParams = useSearchParams();
    const params = searchParams.get('book_id');

    return (
        <div className="grid grid-cols-1 gap-8 justify-items-center">
                <ViewBasic data={story} />
                <Discription data={disc} />
            <div className='w-1/2 m-4'>
                <CommentSection />
            </div>

        </div>
    )
}