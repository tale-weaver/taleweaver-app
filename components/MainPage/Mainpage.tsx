// app/page.tsx
'use client'
import Image from 'next/image'
import Intro from './Intro'
import Bar from './Bar'

const  Mainpage = ({}) =>{
  return ( 
    <main className="flex min-h-screen flex-col items-center p-24">
      <div><Intro/></div>
      <br></br>
      <div id="finish"><Bar section="已完成故事"/></div>
      <br></br>
      <div><Bar section="投票中故事"/></div>
      <br></br>
      <div id="unfinish"><Bar section="徵稿中故事"/></div>
      
    </main>
  )
}
export default Mainpage

