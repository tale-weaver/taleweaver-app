import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LikeButton from '../LikeButton';
import CommentButton from '../CommentButton';

export default function StoryCover(story:any) {

    return (
        // 大小要再調
        <div className='flex flex-col text-center border m-2 p-4 w-72'>
            <div className='w-72'>
                <Link href={{
                    pathname:'/story/book_id',
                    query:{book_id: story.book_id},
                }}>
                    <Image
                        src={story.bookurl}
                        alt="Post"
                        width={250}
                        height={150}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>

            </div>

            <div>
                <p>{story.bookname}</p>
                {/* <p>Post Date: {story.date}</p> */}
                <div className='grid grid-flow-col justify-evenly'>
                    <LikeButton />
                    <CommentButton />
                </div>
                <p>Likes: {story.numlikes}</p>
                <p>Comments: {story.numcomments}</p>
                <p>State: {story.state}</p>
            </div>


        </div>

    )

}


