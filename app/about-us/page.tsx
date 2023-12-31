export default function AboutUsPage() {
  return (
    <main>
      <div className="w-full">
        <br></br>
        <div
          style={{
            textAlign: "left",
            border: "1px solid #ddd ",
            padding: "20px",
            backgroundColor: "#F8F8FF",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            關於我們
          </h1>
          <p>
            Tale Weaver 以「促進創作者間交流」為核心，
            建立一個充滿創意和互動性的網站，鼓勵用戶參與繪畫、與他人交流，並期待能讓所有的創作者找到共鳴，更提供創作者一個可以與讀者接觸或曝光的管道。同時，也讓讀者能透過此網站，對於創作者有更深入的理解。
          </p>
        </div>
        <br></br>
        <div
          style={{
            textAlign: "left",
            border: "1px solid #ddd",
            padding: "20px",
            backgroundColor: "#F8F8FF",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            使用說明
          </h1>
          <div>
            無須會員，皆可瀏覽所有作品。若想要上傳圖片、參與投票或留言則需
            <a
              href="./sign-in"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              註冊會員
            </a>
            。<br></br>
            註1：圖片上傳後，僅供大眾觀賞，除原創作者外並不享有重製與使用的權利。{" "}
            <br></br>
            註2：本網站開放上傳 AI 繪製的圖片，但須於文字說明欄明確標注。
          </div>
        </div>
        <br></br>
        <div
          style={{
            textAlign: "left",
            border: "1px solid #ddd",
            padding: "20px",
            backgroundColor: "#F8F8FF",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            會員權益
          </h1>
          <div>
            會員註冊後，即可參與故事接龍的投票，每格故事僅能投下一票。<br></br>
            可付費
            <a
              href="./subscription"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              升級 VIP 會員
            </a>
            ，即可享有專屬頭像框、下載及 AI 製圖服務。 <br></br>
            VIP 會員若無於到期前取消，將會以原價自動續訂。 <br></br>
          </div>
        </div>
      </div>
    </main>
  );
}
