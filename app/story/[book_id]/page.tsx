import React from "react";
import DisplayInfo from "@/components/bookid/DisplayInfo";

//這是個假資料
const story = {
    bookurl: "/story_images/sunrise.jpg",
    bookname: 'history',
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


export default function StoryView() {

    //回傳的資訊除了網址上的ID，其他都是假的
    return (
        <div>
            <DisplayInfo story={story} disc={disc} />

        </div>
    )
}
