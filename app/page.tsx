// app/page.tsx
'use client'
import Image from 'next/image'
import Intro from '@/components/MainPage/Intro'
import Bar from '@/components/MainPage/Bar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div><Intro/></div>
      <br></br>
      <div id="finish"><Bar section="已完成故事"/></div>
      <br></br>
      <div id="unfinish"><Bar section="未完成故事"/></div>
    </main>
  )
}
