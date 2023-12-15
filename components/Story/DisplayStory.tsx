'use client'

import React from "react";
import StoryCover from "./StoryCover";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from '../ui/button';
import { Search, ArrowUpDown, LibrarySquare, BookText, ArrowUpSquare, Vote } from "lucide-react";

const Stories = [
    {
        bookurl: '/story_images/sea.jpg',
        bookname: 'sea',
        book_id: 1,
        numlikes: 5,
        numcomments: 4,
        state: 'finished',
        date: '2023-11-09'
    },
    {
        bookurl: '/story_images/sunrise.jpg',
        bookname: 'sunrise',
        book_id: 2,
        numlikes: 6,
        numcomments: 3,
        state: 'submitting',
        date: '2023-11-11'
    },
    {
        bookurl: '/story_images/starsky.jpg',
        bookname: 'starsky',
        book_id: 3,
        numlikes: 2,
        numcomments: 1,
        state: 'voting',
        date: '2023-11-01'
    },
    {
        bookurl: '/story_images/galaxy.jpg',
        bookname: 'galaxy',
        book_id: 4,
        numlikes: 4,
        numcomments: 1,
        state: 'submitting',
        date: '2023-11-27'
    },
    {
        bookurl: '/story_images/nebula.jpg',
        bookname: 'nebula',
        book_id: 5,
        numlikes: 0,
        numcomments: 1,
        state: 'finished',
        date: '2023-10-01'
    },
    {
        bookurl: '/story_images/history.jpg',
        bookname: 'history',
        book_id: 6,
        numlikes: 10,
        numcomments: 6,
        state: 'finished',
        date: '2023-10-10'
    },
    {
        bookurl: '/story_images/clock.jpg',
        bookname: 'clock',
        book_id: 7,
        numlikes: 3,
        numcomments: 0,
        state: 'submitting',
        date: '2023-11-06'
    },
];

export default function DisplayStory() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const query: { [key: string]: string } = {};
    const state = searchParams.get("state");
    const sorting = searchParams.get('sorting');
    const term = searchParams.get('term');
    const isAscending = searchParams.get('asce') === 'true';
    
    //request from the backend


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

    const filteredStories = Stories.filter((story: any) => {
        return (
            (!state || story.state === state)
            && (!term || story.bookname.toLowerCase().includes(term))
        )
    })

    const sortedStories = filteredStories.slice().sort((a: any, b: any) => {
        if (sorting === 'likes') {
            return isAscending ? a.numlikes - b.numlikes : b.numlikes - a.numlikes;
        } else if (sorting === 'comments') {
            return isAscending ? a.numcomments - b.numcomments : b.numcomments - a.numcomments;
        } else if (sorting === 'date') {
            const dateA: any = new Date(a.date);
            const dateB: any = new Date(b.date);
            return isAscending ? dateA - dateB : dateB - dateA;
        }
    })


    return (
        <div>
            <div className="flex flex-row content-center ml-4">
            {/* <div className="grid grid-cols-3 gird-flow-row content-center"> */}
                <div className='flex justify-start basis-1/3 m-4 mr-8'>
                    <Button variant='secondary' className='m-2' onClick={() => handleChange(null, null, term)}>All</Button>
                    <Button variant='secondary' className='m-2' onClick={() => handleChange('finished', null, term)}><BookText />Finished</Button>
                    <Button variant='secondary' className='m-2' onClick={() => handleChange('submitting', null, term)}><ArrowUpSquare />Submitting</Button>
                    <Button variant='secondary' className='m-2' onClick={() => handleChange('voting', null, term)}><Vote />Voting</Button>
                </div>

                <div className='flex justify-start basis-1/3 m-4'>
                    <p className='flex items-center'><ArrowUpDown /></p>
                    <Button  variant='ghost' className='m-2' onClick={() => handleChange(state, 'date', term)}>Date</Button>
                    <Button  variant='ghost' className='m-2' onClick={() => handleChange(state, 'likes', term)}>Likes</Button>
                    <Button  variant='ghost' className='m-2' onClick={() => handleChange(state, 'comments', term)}>Comments</Button>

                </div>

                <div className="flex self-center justify-self-end m-4">
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

            <div className="grid grid-cols-4 gap-4">
                {sortedStories.map((story: any, index: number) => (
                    <StoryCover
                        key={index}
                        bookurl={story.bookurl}
                        bookname={story.bookname}
                        book_id={story.book_id}
                        numlikes={story.numlikes}
                        numcomments={story.numcomments}
                        state={story.state}
                        date={story.date}
                    />
                ))}
            </div>

        </div>

    )
}