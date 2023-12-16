import React from 'react';
import Image from 'next/image';
import LikeButton from '../LikeButton';
import CommentButton from '../CommentButton';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function ViewBasic({ data }: { data: any }) {
    // const queryStory = async () => {
    //     const { data } = await axios.get(`http://127.0.0.1:5000/story/${bookid}`);
    //     return data;
    // };
    // const { isPending, isError, data, error } = useQuery({
    //     queryKey: ["story",bookid],
    //     queryFn: queryStory,
    // });


    return (
        // 還沒設link到story-read
        <div className='w-1/2'>
            <div className='relative w-144 h-96 mt-8'>
                <Image
                    src={data.bookurl}
                    alt="Post"
                    fill
                    style={{ cursor: 'pointer' }}
                    className='object-cover'
                />

            </div>

            <div className='grid grid-flow-col mt-4'>
                <h1 className='flex flex-start text-4xl'>{data.bookname}</h1>
                <div className='flex flex-row justify-self-end gap-4'>
                    <LikeButton />
                    <CommentButton />
                </div>

            </div>


        </div >
    )
}
