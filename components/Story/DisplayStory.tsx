'use client'

import React from "react";
import { useState } from "react";
import StoryCover from "./StoryCover";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from '../ui/button';
import { Search } from "lucide-react";

export default function DisplayStory({ Stories }: { Stories: any }) {

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
            <div className="flex flex-row content-center">
                <div className='flex justify-start m-4'>
                    <p className='flex items-center text-base'>Filter</p>
                    <Button className='m-2' onClick={() => handleChange(null, null, term)}>All</Button>
                    <Button className='m-2' onClick={() => handleChange('finished', null, term)}>Finished</Button>
                    <Button className='m-2' onClick={() => handleChange('uploading', null, term)}>Uploading</Button>
                    <Button className='m-2' onClick={() => handleChange('voting', null, term)}>Voting</Button>
                </div>

                <div className='flex justify-start m-4'>
                    <p className='flex items-center text-base'>Sort</p>
                    <Button className='m-2' onClick={() => handleChange(state, 'date', term)}>Date</Button>
                    <Button className='m-2' onClick={() => handleChange(state, 'likes', term)}>Likes</Button>
                    <Button className='m-2' onClick={() => handleChange(state, 'comments', term)}>Comments</Button>

                </div>

                <div className="flex flex-row self-center m-4">
                    <div className="self-center"><Search /></div>
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