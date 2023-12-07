'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function StoryCover(story:any) {

    return (
        // 大小要再調
        <div className='flex flex-col text-center border m-2 p-4 w-72'>
            <div className='w-72'>
                <Link href={{
                    pathname:'/story/story_id',
                    query:{story_id: story.storyID},
                }}>
                    <Image
                        src={story.storyurl}
                        alt="Post"
                        width={250}
                        height={150}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>

            </div>

            <div>
                <p>{story.storyname}</p>
                {/* <p>Post Date: {story.date}</p> */}
                {/* <div className='grid grid-flow-col'>
                    這裡要用Chu的componnent
                    <LikeButton />
                    <CommentButton />
                </div> */}
                <p>Likes: {story.numlikes}</p>
                <p>Comments: {story.numcomments}</p>
                {/* <p>State: {story.state}</p> */}
            </div>


        </div>

    )

}


