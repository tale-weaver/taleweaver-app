import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1>About US</h1>
      <p>
      Tale Weaver 以「促進創作者間交流」為核心， 建立一個充滿創意和互動性的網站，鼓勵用戶參與繪畫、與他人交流，並期待能讓所有的創作者找到共鳴，更提供創作者一個可以與讀者接觸或曝光的管道。同時，也讓讀者能透過此網站，對於創作者有更深入的理解。
      </p>
      <br></br>
      <h1>使用說明</h1>
      <div>
      無須會員，皆可瀏覽所有作品。若想要上傳圖片、參與投票或留言則需<a href="." style={{ color: 'blue', textDecoration: 'underline' }}>註冊會員</a>。<br></br>
      註1：圖片上傳後，僅供大眾觀賞，除原創作者外並不享有重製與使用的權利。 <br></br>
      註2：本網站開放上傳 AI 繪製的圖片，但須於文字說明欄明確標注。 
      </div>
      <br></br>
      <h1>會員權益</h1>
      <div>
      會員註冊後，即可參與故事接龍的投票，每格故事僅能投下一票。（這邊我先亂掰）<br></br>
      每次參與投票可以獲得 1 點、上傳作品且被選為故事則可獲得 15 點，集滿 20 點後，每格故事改為可以投下不重複的兩票。 <br></br>
      </div>
    </div>
    </main>
  )
}
