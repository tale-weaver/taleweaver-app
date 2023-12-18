'use client'

import Image from 'next/image'
import SubForm from '@/components/Subscription/SubForm'
export default function Home() {
  return (
    <main>
    <br></br>
    <div className='w-full' style={{ textAlign: 'left', border: '1px solid #ddd', padding: '20px', backgroundColor: '#F8F8FF'}}>
      <h1 style={{ fontSize: '36px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>VIP 會員訂購 </h1>
      <br></br>
      <div>
      升級 VIP 會員後，即可享有專屬頭像框、下載及 AI 製圖服務。<br></br>
      價格為每月新台幣 300 元，VIP 會員若無於到期前取消，將會以原價自動續訂。 <br></br>
      </div>
      <br></br>
      <div className='w-full' id="finish"><SubForm/></div>
      




    </div>
    </main>
  )
}
