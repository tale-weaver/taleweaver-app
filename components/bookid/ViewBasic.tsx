'use client'
import React from 'react';
import Image from 'next/image';
import LikeButton from '../LikeButton';
import CommentButton from '../CommentButton';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export default function ViewBasic({ records }: { records: any }) {
    const searchParams = useSearchParams();
    const book_id = searchParams.get('book_id');

    // const queryStory = async () => {
    //     const { data } = await axios.get(`http://127.0.0.1:5000/story/${book_id}`);
    //     return data;
    // };
    // const { isPending, isError, data, error } = useQuery({
    //     queryKey: ["story", book_id],
    //     queryFn: queryStory,
    // });

    // if (isPending) {
    //     return <p>is pending...</p>
    // }
    // if (isError) {
    //     return <p>Error: {error.message}</p>
    // }
    // else {
        // const records = data.records;
        return (
            // 還沒設link到story-read
            <div className='w-full'>
                <div className='relative w-144 h-96 mt-8'>
                    <Image
                        src={records.bookurl}
                        alt="Post"
                        fill
                        className='object-cover'
                    />

                </div>

                <div className='grid grid-flow-col mt-4'>
                    <h1 className='flex flex-start text-4xl'>{records.bookname}</h1>
                    <div className='flex flex-row justify-self-end gap-4'>
                        <LikeButton bookId={records.book_id} liked={false} like_nums={records.numlikes} />
                        <CommentButton comment_nums={records.numcomments} />
                    </div>

                </div>


            </div >
        )
    // }

}
