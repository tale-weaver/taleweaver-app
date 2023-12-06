'use client'

import Image from 'next/image'
import SubForm from '@/components/Subscription/SubForm'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1>VIP 會員訂購 </h1>
      <div>
      升級 VIP 會員後，即可享有專屬頭像框、下載及 AI 製圖服務。<br></br>
      價格為每月新台幣 300 元，VIP 會員若無於到期前取消，將會以原價自動續訂。 <br></br>
      </div>
      <br></br>
      <div id="finish"><SubForm/></div>
      




    </div>
    </main>
  )
}
