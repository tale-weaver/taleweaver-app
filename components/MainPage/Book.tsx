import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LikeButton from '../LikeButton';
import CommentButton from '../CommentButton';
import { BookText, ArrowUpSquare, Vote } from "lucide-react";

export default function Book({story}:{story: any}) {
    const icons = (state: string) => {
        if (state === 'finished') return <BookText />
        else if (state === 'submitting') return <ArrowUpSquare />
        else if (state === 'voting') return <Vote />
        else return 0;
    }

    return (
        <div className='static m-2 h-84'>
            <div className='relative h-48 w-72 cursor-pointer'>
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
            </div>

        </div>

    )

}


