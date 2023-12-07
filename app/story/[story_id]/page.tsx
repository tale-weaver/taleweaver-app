'use client'

import React from "react";
import ViewBasic from "@/components/Storyid/ViewBasic";
import { useSearchParams, useRouter } from "next/navigation";
import Discription from "@/components/Storyid/Discription";

//這是個假資料
const story = {
    storyurl: "/story_images/sunrise.jpg",
    storyname: 'history',
    storyID: 6,
    numlikes: 10,
    numcomments: 6,
    state: 'uploading',
    date: '2023-10-10',
    pages: ['p1', 'p2', 'p3'] //已成功接龍的頁數
}

const disc = {
    state: story.state,
    pages: story.pages
}


export default function StoryView() {
    const searchParams = useSearchParams();
    const params = searchParams.get('story_id');

    //回傳的資訊除了網址上的ID，其他都是假的
    return (
        <div>
            <p>只有網址上的ID是對應點進來的圖片，其他都是假的</p>
            <p>storyID: {params}</p>
            <div className="flex flex-row">
                <ViewBasic story={story} />
                <Discription records={disc} />
            </div>

            <div className='m-4'>
                {/* <CommentSection /> */}
            </div>

        </div>
    )
}
