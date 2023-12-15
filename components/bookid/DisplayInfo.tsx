'use client';

import React from "react";
import { useSearchParams } from "next/navigation";
import ViewBasic from "./ViewBasic";
import Discription from "./Discription";
import CommentSection from "../CommentSection";

export default function DisplayInfo({story, disc}:{story:any, disc:any}) {
    const searchParams = useSearchParams();
    const params = searchParams.get('book_id');

    return (
        <div className="grid grid-cols-1 gap-8 justify-items-center">
            <div className="flex flex-row content-center m-4">
                <ViewBasic story={story} />
                <Discription records={disc} />
            </div>


            <div className='w-1/2 m-4'>
                <CommentSection />
            </div>

        </div>
    )
}