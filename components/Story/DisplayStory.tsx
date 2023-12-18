'use client'

import React, { useEffect, useState } from "react";
import StoryCover from "./StoryCover";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from '../ui/button';
import { Search, ArrowUpDown, LibrarySquare, BookText, ArrowUpSquare, Vote } from "lucide-react";
import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";

const data = {
    records:[
    {
        bookurl: '/story_images/sea.jpg',
        bookname: 'sea',
        book_id: 1,
        numlikes: 5,
        numcomments: 4,
        state: 'voting',
        date: '2023-11-09',
    },
    {
        bookurl: '/story_images/starsky.jpg',
        bookname: 'starsky',
        book_id: 2,
        numlikes: 3,
        numcomments: 4,
        state: 'voting',
        date: '2023-11-09',
    },
    {
        bookurl: '/story_images/galaxy.jpg',
        bookname: 'galaxy',
        book_id: 3,
        numlikes: 4,
        numcomments: 1,
        state: 'submitting',
        date: '2023-11-27',
    },
    {
        bookurl: '/story_images/history.jpg',
        bookname: 'history',
        book_id: 4,
        numlikes: 10,
        numcomments: 6,
        state: 'finished',
        date: '2023-10-10',
    },
    {
        bookurl: '/story_images/clock.jpg',
        bookname: 'clock',
        book_id: 5,
        numlikes: 3,
        numcomments: 0,
        state: 'submitting',
        date: '2023-11-06',
    },
]}

export function StorySection(query: any) {
    //request to the backend
    // const queryStory = async () => {
    //     const { data } = await axios.get("http://127.0.0.1:5000/story");
    //     return data;
    // };
    // const { isPending, isError, data, error } = useQuery({
    //     queryKey: ["story"],
    //     queryFn: queryStory,
    // });

    // if (isPending) {
    //     return (
    //         <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    //             {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
    //                 <div key={id} className="grid-flow-col w-72 h-84 gap-4">
    //                     <Skeleton className="h-52 w-full p-2 m-2 p-4 bg-slate-100" />
    //                     <Skeleton className="h-8 w-full p-4 m-2 bg-slate-100" />
    //                     <Skeleton className='h-12 w-full p-4 m-2 bg-slate-100' />
    //                 </div>
    //             )
    //             )}
    //         </div>

    //     )
    // }

    // if (isError) {
    //     return <p>Error: {error.message}</p>
    // }

    // else {        
        
        const stories = data.records;
        console.log(stories);
        const filteredStories = stories?.filter((story: any) => {
            return (
                (!(query.query.state) || story.state === query.query.state)
                && (!(query.query.term) || story.bookname.toLowerCase().includes(query.query.term))
            )
        })

        const sortedStories: any = filteredStories?.slice().sort((a: any, b: any) => {
            if (query.query.sorting === 'likes') {
                return query.query.isAscending ? a.numlikes - b.numlikes : b.numlikes - a.numlikes;
            } else if (query.query.sorting === 'comments') {
                return query.query.isAscending ? a.numcomments - b.numcomments : b.numcomments - a.numcomments;
            } else if (query.query.sorting === 'date') {
                const dateA: any = new Date(a.date);
                const dateB: any = new Date(b.date);
                return query.query.isAscending ? dateA - dateB : dateB - dateA;
            }
        })

        return (
            <div>
                <div className="grid grid-cols-4">

                    {sortedStories?.map((story: any, index: number) => (
                        <StoryCover
                            key={index}
                            bookurl={story.bookurl}
                            bookname={story.bookname}
                            book_id={story.book_id}
                            numlikes={story.numlikes}
                            numcomments={story.numcomments}
                            state={story.state}
                            date={story.date}
                            time_intervals={story.time_intervals}
                        />
                    ))}

                </div>
            </div>

        )
    // }
}

export default function DisplayStory() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const query: { [key: string]: string } = {};
    const state = searchParams.get("state");
    const sorting = searchParams.get('sorting');
    const term = searchParams.get('term');
    const isAscending = searchParams.get('asce') === 'true';

    const handleChange = (
        newstate: string | null,
        newsort: string | null,
        newterm: string | null,
    ) => {
        if (newstate) {
            query.state = newstate;
        }
        if (newsort) {
            query.sorting = newsort;
            query.asce = (!isAscending).toString();
        }
        if (newterm) query.term = newterm.toLowerCase();

        router.push(`?${new URLSearchParams(query).toString()}`);
    };

    return (
        <div>
            <div className="grid grid-flow-col justify-items-start content-center">
                {/* <div className="grid grid-cols-3 gird-flow-row content-center"> */}
                <div className='flex justify-start basis-1/3 mt-4 mb-4 mr-8'>
                    <Button variant='secondary' className='m-2' onClick={() => handleChange(null, null, term)}>All</Button>
                    <Button variant='secondary' className='m-2' onClick={() => handleChange('finished', null, term)}><BookText />Finished</Button>
                    <Button variant='secondary' className='m-2' onClick={() => handleChange('submitting', null, term)}><ArrowUpSquare />Submitting</Button>
                    <Button variant='secondary' className='m-2' onClick={() => handleChange('voting', null, term)}><Vote />Voting</Button>
                </div>

                <div className='flex justify-start basis-1/3 m-4'>
                    <p className='flex items-center'><ArrowUpDown /></p>
                    <Button variant='ghost' className='m-2' onClick={() => handleChange(state, 'date', term)}>Date</Button>
                    <Button variant='ghost' className='m-2' onClick={() => handleChange(state, 'likes', term)}>Likes</Button>
                    <Button variant='ghost' className='m-2' onClick={() => handleChange(state, 'comments', term)}>Comments</Button>

                </div>

                <div className="flex self-center justify-self-end">
                    <div className="self-center mr-2"><Search /></div>
                    <form>
                        <input
                            type="text"
                            placeholder="Search by story name"
                            onChange={(e) => { handleChange(null, null, e.target.value) }}
                            className="border"
                        />
                        {/* <button type='submit' className='content-center m-2'> <Search /> </button> */}
                    </form>
                </div>
            </div>

            <StorySection query={{ state, sorting, term, isAscending }} />

        </div>

    )
}