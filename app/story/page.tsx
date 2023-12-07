import React from 'react';
import DisplayStory from '@/components/Story/DisplayStory';

//在這裡跟後端要資料嗎？
const AllStory = [
    {
        storyurl: '/story_images/sea.jpg',
        storyname: 'sea',
        storyID: 1,
        numlikes: 5,
        numcomments: 4,
        state: 'finished',
        date: '2023-11-09'
    },
    {
        storyurl: '/story_images/sunrise.jpg',
        storyname: 'sunrise',
        storyID: 2,
        numlikes: 6,
        numcomments: 3,
        state: 'uploading',
        date: '2023-11-11'
    },
    {
        storyurl: '/story_images/starsky.jpg',
        storyname: 'starsky',
        storyID: 3,
        numlikes: 2,
        numcomments: 1,
        state: 'voting',
        date: '2023-11-01'
    },
    {
        storyurl: '/story_images/galaxy.jpg',
        storyname: 'galaxy',
        storyID: 4,
        numlikes: 4,
        numcomments: 1,
        state: 'uploading',
        date: '2023-11-27'
    },
    {
        storyurl: '/story_images/nebula.jpg',
        storyname: 'nebula',
        storyID: 5,
        numlikes: 0,
        numcomments: 1,
        state: 'finished',
        date: '2023-10-01'
    },
    {
        storyurl: '/story_images/history.jpg',
        storyname: 'history',
        storyID: 6,
        numlikes: 10,
        numcomments: 6,
        state: 'finished',
        date: '2023-10-10'
    },
    {
        storyurl: '/story_images/clock.jpg',
        storyname: 'clock',
        storyID: 7,
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
