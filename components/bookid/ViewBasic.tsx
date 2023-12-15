import React from 'react';
import Image from 'next/image';
import LikeButton from '../LikeButton';
import CommentButton from '../CommentButton';

export default function ViewBasic({story} : {story: any}) {
    return (
        // 還沒設link到story-read
        <div className='flex flex-row m-2 p-4'>
            <div className='flex flex-col text-center m-4'>
                <Image
                    src={story.bookurl}
                    alt="Post"
                    width={320}
                    height={280}
                    style={{ cursor: 'pointer' }}
                />

            </div>

            <div className='grid grid-flow-row text-center m-4'>
                <h1 className='text-xl m-2'>{story.bookname}</h1>
                <LikeButton />
                <CommentButton />
                {/* <p>Likes: {story.numlikes}</p>
                <p>Comments: {story.numcomments}</p> */}
            </div>


        </div >
    )
}
