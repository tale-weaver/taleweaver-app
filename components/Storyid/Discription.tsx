'use client'

import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Discription ({records}:{records: any}) {
    const state = records.state;
    const page_number = (records.pages).length + 1; //傳入的已成功接龍的頁面(pages)的頁數

    if (state === 'uploading') {
        return (
            <div className="flex flex-col text-center">
                <p>現正投稿中: 第{page_number}頁</p>
                <p>點選封面即可查看過往的頁數喔</p>
                <Button>圖片上傳</Button>
                {/* <Link href='/StoryUploadPage'><Button>圖片上傳</Button></Link> */}
            </div>
        )
    }
    else if (state === 'voting') {
        return (
            <div>
                <p>現正投票中: 第{page_number}頁</p>
                <p>點選封面即可查看過往的頁數喔</p>
            </div>
        )
    }
    else return 0;

}
