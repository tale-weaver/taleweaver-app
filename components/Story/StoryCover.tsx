import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LikeButton from '../LikeButton';
import CommentButton from '../CommentButton';
import { BookText, ArrowUpSquare, Vote } from "lucide-react";

export default function StoryCover(story: any) {
    const icons = (state: string) => {
        if (state === 'finished') return <BookText />
        else if (state === 'submitting') return <ArrowUpSquare />
        else if (state === 'voting') return <Vote />
        else return 0;
    }
    return (
        // 大小要再調
        <div className='flex flex-col text-center border m-2 p-4 w-72 hover:bg-gray-400 hover:text-neutral-50'>
            <div>
                <Link href={{
                    pathname: '/story/book_id',
                    query: { book_id: story.book_id },
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
                <div className='flex flex-row justify-center mt-2'>
                    <div className='mr-2'>{icons(story.state)}</div>
                    <p className='text-lg mb-2'>{story.bookname}</p>
                </div>

                {/* <p>Post Date: {story.date}</p> */}
                <div className='grid grid-flow-col justify-evenly'>
                    <LikeButton />
                    <CommentButton />
                </div>
                {/* <p>Likes: {story.numlikes}</p>
                <p>Comments: {story.numcomments}</p> */}
                {/* <p>Status: {story.state}</p> */}
            </div>


        </div>

    )

}


