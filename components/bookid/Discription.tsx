'use client'
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Upload } from 'lucide-react';
import Countdown from './CountDown';
import { useSearchParams } from 'next/navigation';

export default function Discription({ records }: { records: any }) {
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
        const timearray: any = records.time_intervals;
        const currentTime = new Date().getTime();
        const intervalStart = timearray.slice().reverse().find(interval => currentTime >= new Date(interval.time_stamp).getTime()) || null;
        const intervalEnd = timearray.slice().find(interval => currentTime < new Date(interval.time_stamp).getTime()) || null;
        // console.log(intervalStart, intervalEnd);

        const status = intervalStart.status;
        const page_number = intervalStart.round;

        if (status === 'submitting') {
            return (
                <div className='w-full mb-16'>
                    <div className="flex flex-row align-center">
                        <div className='flex flex-start self-center text-xl mr-8'>現正投稿中: 第{page_number}頁</div>
                        <div className='mr-8'>
                            <Link href={{
                                pathname: '/storyupload/book_id',
                                query: { book_id: book_id },
                            }}>
                                <Button size='lg'><Upload color="#ffffff" className='mr-4' />圖片上傳</Button>
                            </Link>
                        </div>
                        <div className='self-center text-xl mr-8'>
                            <Countdown date={intervalEnd} />
                        </div>
                    </div>
                </div>
            )
        }
        else if (status === 'voting') {
            return (
                <div className='flex flex-row w-full mb-16'>
                    <div className='flex flex-start text-xl mr-8'>現正投票中: 第{page_number}頁</div>
                    <div className='self-center text-xl mr-8'>
                        <Countdown date={intervalEnd} />
                    </div>
                </div>
            )
        }

        else if (status === 'finished') {
            return (
                <div className='w-full mb-16'>
                    <div className='flex flex-start text-xl'>本故事已完結！感謝大家的參與</div>
                </div>
            )
        }

    // }


}
