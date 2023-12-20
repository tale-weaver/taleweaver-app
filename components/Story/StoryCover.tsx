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
        <div className='static border m-2 p-4 h-84 hover:bg-gray-400 hover:text-neutral-50'>
            <div className='relative h-48 cursor-pointer'>
                <Link href={{
                    pathname: '/story/book_id',
                    query: { book_id: story.book_id },
                }}>
                    <Image
                        src={story.bookurl}
                        alt="Post"
                        fill
                        sizes="100vw"
                        className='object-cover'
                    />
                </Link>

            </div>

            <div className='flex flex-col'>
                <div className='flex flex-row justify-center self-start mt-2'>
                    <div className='mr-2'>{icons(story.state)}</div>
                    <p className='text-lg mb-2'>{story.bookname}</p>
                </div>
                {/* <p>Post Date: {story.date}</p> */}
                <div className='grid grid-flow-col self-end'>
                    <div className='mr-4'><LikeButton bookId={story.book_id} liked={story.liked} like_nums={story.numlikes} /></div>
                    <CommentButton comment_nums={story.numcomments} />
                </div>
                {/* <p>Likes: {story.numlikes}</p>
                <p>Comments: {story.numcomments}</p> */}
                {/* <p>Status: {story.state}</p> */}
                               
            </div>

        </div>

    )

}


