import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Upload } from 'lucide-react';

export default function Discription({ data }: { data: any }) {

    // const queryStory = async () => {
    //     const { data } = await axios.get(`http://127.0.0.1:5000/story/${bookid}`);
    //     return data;
    // };
    // const { isPending, isError, data, error } = useQuery({
    //     queryKey: ["story",bookid],
    //     queryFn: queryStory,
    // });

    const book_id = data.book_id;
    const state = data.state;
    const page_number = (data.pages).length + 1; //傳入的已成功接龍的頁面(pages)的頁數

    if (state === 'submitting') {
        return (
            <div className='w-1/2 mb-16'>
                <div className="grid grid-flow-col align-center">
                    <p className='flex flex-start self-center text-xl'>現正投稿中: 第{page_number}頁</p>
                    <div className='flex flex-row justify-self-end'>
                        <Link href={{
                            pathname: '/storyupload/book_id',
                            query: { book_id: book_id },
                        }}>
                            <Button size='lg'><Upload color="#ffffff" className='mr-4' />圖片上傳</Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <p>點選封面即可查看過往的頁數喔</p>
                </div>
            </div>
        )
    }
    else if (state === 'voting') {
        return (
            <div className='w-1/2 mb-16'>
                <p className='flex flex-start text-xl'>現正投票中: 第{page_number}頁</p>
                <p>點選封面即可查看過往的頁數喔</p>
            </div>
        )
    }

    else if (state === 'finished') {
        return (
            <div className='w-1/2 mb-16'>
                <p className='flex flex-start text-xl'>本故事已完結！感謝大家的參與</p>
            </div>
        )
    }

}
