import React from "react";
import ViewBasic from "./ViewBasic";
import Discription from "./Discription";
import CommentSection from "../CommentSection";
import dynamic from "next/dynamic";

//這是個假資料
const story = {
    bookurl: "/story_images/clock.jpg",
    bookname: 'clock',
    book_id: 6,
    numlikes: 10,
    numcomments: 6,
    // state: 'submitting',
    date: '2023-10-10',
    time_intervals: [
        {
            "time_stamp": "2023/12/18 14:02:00",
            "round": 1,
            "status": "submitting"
        },
        {
            "time_stamp": "2023/12/18 18:00:00",
            "round": 1,
            "status": "voting"
        },
        {
            "time_stamp": "2023/12/18 18:30:00",
            "round": 2,
            "status": "submitting"
        },
        {
            "time_stamp": "2023/12/18 19:00:00",
            "round": 2,
            "status": "voting"
        },
        {
            "time_stamp": "2023/12/18 19:30:00",
            "round": 2,
            "status": "finished"
        }
    ]
}


export default function DisplayInfo() {

    const Discription = dynamic(() => import('./Discription'), { ssr: false })

    return (
        <div className="grid grid-cols-1 gap-4 justify-items-center" >
                <ViewBasic records={story} />
                <Discription records={story} />
            <div className='w-full m-4'>
                <CommentSection />
            </div>

        </div>
    )
}