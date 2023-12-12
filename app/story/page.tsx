import React from 'react';
import DisplayStory from '@/components/Story/DisplayStory';

//在這裡跟後端要資料嗎？
const AllStory = [
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
        state: 'uploading',
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
        state: 'uploading',
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
        state: 'uploading',
        date: '2023-11-06'
    },
];


export default function storyAll() {

    return (
        <div>
            <DisplayStory Stories={AllStory} />
        </div>
    );
};
