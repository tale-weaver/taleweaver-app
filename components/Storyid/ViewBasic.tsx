'use client'

import React from 'react';
import Image from 'next/image';

export default function ViewBasic({story} : {story: any}) {
    return (
        // 還沒設link到story-read
        <div className='flex flex-row m-2 p-4 w-250'>
            <div className='flex flex-col text-center'>
                <Image
                    src={story.storyurl}
                    alt="Post"
                    width={250}
                    height={150}
                    style={{ cursor: 'pointer' }}
                />

            </div>

            <div className='grid grid-flow-row text-center m-4'>
                <h1 className='text-xl m-2'>{story.storyname}</h1>
                {/* 這裡要用Chu的component */}
                {/* <LikeButton />
                <CommentButton /> */}
                <p>Likes: {story.numlikes}</p>
                <p>Comments: {story.numcomments}</p>
            </div>


        </div >
    )
}
